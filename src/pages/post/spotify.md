---
layout: ../../layouts/BaseLayout.astro
title: Obtenir le Morceau Actuel depuis l'API Spotify
description: Apprends comment utiliser l'API de Spotify pour récupérer le morceau actuellement en lecture sur ton compte. Ce guide te montrera étape par étape comment interagir avec l'API de Spotify pour obtenir des informations sur la chanson que tu écoutes actuellement, y compris le titre et l'artiste
date: 2023-08-28
---

Apprends comment utiliser l'API de Spotify pour récupérer le morceau actuellement en lecture sur ton compte. Ce guide te montrera étape par étape comment interagir avec l'API de Spotify pour obtenir des informations sur la chanson que tu écoutes actuellement, y compris le titre et l'artiste.

Avant de commencer, il te faut :

- [Tes clés api spotify](https://developer.spotify.com/)
- [Avoir un compte cloudflare](https://www.cloudflare.com/fr-fr/)(facultatif)

Une fois tes clés obtenues, tu peux te rendre sur le site [base64decode](https://www.base64encode.org/) pour encoder tes clés API comme ça :
![image](https://res.cloudinary.com/decneq2aj/image/upload/v1693247663/Capture_d_e%CC%81cran_2023-08-28_a%CC%80_20.33.17_kfhllq.png)

Ensuite, il faudra faire une requête avec ton client_id et ton redirect_uri que tu as configurés sur ton dashboard Spotify :

```
https://accounts.spotify.com/authorize?client_id=TON_CLIENT_ID&response_type=code&redirect_uri=http://localhost:5173/callback&scope=user-read-currently-playing
```

Cette requête va te rediriger sur ton callback uri avec un code. Il te faudra le récupérer et faire une deuxième requête curl :

```
curl -H "Authorization: Basic <la base 64 de ton code>" -d grant_type=authorization_code -d code=<le code de ton callback url> -d redirect_uri=http%3A%2F%2Flocalhost:5173/callback https://accounts.spotify.com/api/token
```

Tu auras une réponse de ce type :

```json
{
  "access_token": "xxxx",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "xxx",
  "scope": "user-read-currently-playing"
}
```

Tu auras juste à récupérer le **refresh_token**.

Tu devrais normalement avoir 2 clés :

- **SPOTIFY_BASE_64**: la base 64 de ta clé client_id et client_secret
- **SPOTIFY_REFRESH_TOKEN**: le refresh token que tu as récupéré juste avant

### Récaputilatifs

- Tu as récupéré tes clés API Spotify.
- Tu as encodé tes clés API en base 64.
- Tu as fait une requête à l'API de Spotify avec ton client_id, redirect_uri et un [scope](https://developer.spotify.com/documentation/web-api/concepts/scopes) supplémentaire : user-read-currently-playing. Ce scope te permet de récupérer la chanson en cours d'écoute. Tu peux combiner les scopes, par exemple ajouter user-top-read pour récupérer tes meilleures écoutes sur Spotify.
- Tu as fait une requête curl pour récupérer le refresh token.

### Création de l'endpoint

Dans cette section, nous allons créer un **endpoint** pour récupérer la chanson que tu écoutes actuellement en utilisant un appel **ajax**.

J'ai choisi d'utiliser Cloudflare Workers pour déployer mon API et le framework [honojs](https://hono.dev/) pour la créer. Cependant, tu peux utiliser n'importe quel framework backend de ton choix, comme Node.js ou Next.js.

Si tu choisis d'utiliser **honojs**, commence par initialiser le projet avec cette commande :

```
pnpm create hono@latest le_nom_du_projet
```

On te demandera ensuite quel template tu souhaites utiliser. Assure-toi de sélectionner cloudflare-workers.
![terminal](https://res.cloudinary.com/decneq2aj/image/upload/v1693327585/Capture_d_e%CC%81cran_2023-08-29_a%CC%80_18.45.02_curtil.png)

Puis, ouvre le fichier wrangler.toml et modifie-le comme ceci :

```
name = "le_nom_de_ton_projet"
compatibility_date = "2023-08-15"
```

Utilise ensuite la commande **wrangler login** pour te connecter à ton compte Cloudflare et déployer ton projet.

Maintenant, crée un fichier **spotify.ts** et ajoute ce morceau de code :

```ts
export const getAccessToken = async (): Promise<{ access_token: string }> => {
  const refresh_token: string = 'Ton refresh token'

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic Ton code basic64`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}
```

Ce code contient une fonction asynchrone appelée **getAccessToken** qui fait un appel **ajax** pour récupérer ton access token, dont tu auras besoin.

Toujours dans le fichier **spotify.ts**, ajoute ce morceau de code :

```ts
export const getAccessToken = async (): Promise<{ access_token: string }> => {
  //...
}

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken()

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
```

Dans cette fonction, on rappelle notre première fonction **getAccessToken** pour récupérer notre **access_token** et faire notre appel **ajax** juste après sur l'api de Spotify, avec notre **access_token** en tant que Bearer token dans l'en-tête de la requête **ajax**.

Maintenant, tu peux aller dans le fichier **index.ts** le fichier principal de ton projet, et importer ta fonction **currentlyPlayingSong**

Ton fichier de base doit ressembler à ça :

```ts
import { Hono } from 'hono'
import { currentlyPlayingSong } from './lib/spotify.ts'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
```

De mon côté, je vais mettre en place le **CORS** pour éviter qu'un autre site puisse accéder à mon **api**, et je configure aussi les méthodes autorisées. Pour nous, un simple **GET** suffira. Je liste mes domaines comme ceci :

```ts
//...
import { cors } from 'hono/cors'
//...
const app = new Hono()

app.use(
  '*',
  cors({
    origin: [
      'xxxx',
      'xxxx',
      'https://www.dereje.cyou',
      'http://localhost:5173',
      'http://localhost:3000',
      // autre sites...
    ],
    allowHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
    allowMethods: ['GET'],
    exposeHeaders: ['Content-Length'],
  })
)

app.options('*', (c) => {
  return c.text('', 204)
})
```

Ensuite, on peut commencer à créer notre route. Pour ma part, je n'ai pas cherché à compliquer les choses, j'utilise la racine de l'URL :

```ts
app.get('/', async (c) => {
    const data = await currentlyPlayingSong()
    if(data.status === 204 || data.status > 400) {
       return c.json({
           isPlaying: false,
       },{
           status: 200
       })
    }
    const song = await data.json() as any

    if (song.item === null) {
        return c.json({
            isPlaying: false,
        },{
            status: 200
        })
    }

    const current_song = {
        title: song.item.name,
        artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
        song_url: song.item.external_urls.spotify,
    };


    return c.json({
        current_song
    })
}
```

Dans ce code, je récupère la chanson en cours de lecture sur Spotify et je vérifie aussi si le statut que je reçois est strictement égal à 204 ou supérieur à 400. Dans ce cas, j'envoie une réponse JSON avec isPlaying à false et un statut à 200. Je refais la même chose si la chanson est à null. Ensuite, je crée un objet qui contiendra les informations dont j'ai besoin : le titre de la chanson, l'artiste et l'URL de la chanson. Si tu veux récupérer d'autres informations, fais simplement un console.log de la chanson pour voir ce que tu obtiens, il y a pas mal de données.

Pour finir, tu dois exécuter la commande suivante et te rendre sur ton tableau de bord Cloudflare, à la page **Workers et Pages**

```
wrangler deploy --minify src/index.ts
```

Normalement, tu verras ton worker dans la liste de tes projets :
![projets](https://res.cloudinary.com/decneq2aj/image/upload/v1693332062/Capture_d_e%CC%81cran_2023-08-29_a%CC%80_19.57.15_cpdhgb.png)
Pour mon cas c'est le projets : **api-spotify-song**

L'avantage de cette approche, c'est que je n'ai plus à me soucier de créer une route api dans mes futurs projets. Je n'ai qu'à faire un appel **ajax** sur mon api et récupérer les données. Pour personnaliser davantage, il est très facile d'ajouter un domaine personnalisé pour son api.