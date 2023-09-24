import React, { useEffect, useState } from 'react';
import { Play } from "./Play.ts.tsx";
import { NotPlay } from "./NotPlay.tsx";

type SpotifyCurrentSongType = {
	title: string;
	artist: string;
	song_url: string;
	is_playing: string;
};

export const useFetchSpotifyData = () => {
	const [data, setData] = useState<Partial<SpotifyCurrentSongType>>({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://current-playing.dereje.fr/', { method: 'GET' })
			.then((song) => song.json())
			.then((song) => {
				setData(song.current_song);
				setLoading(false);
			})
			.catch((e) => {
				setError(e);
				setLoading(false);
			});
	}, []);

	return { data, loading, error };
};

export default function Spotify() {
	const { data, loading, error } = useFetchSpotifyData();

	if (loading) return <p>Chargement...</p>;
	if (error) return <p>Erreur : {error.message}</p>;

	return (
		<div className={"flex w-max items-center justify-center gap-2 rounded-md px-1 py-1 text-base shadow-lg ring-1 ring-zinc-900/5 backdrop-blur shadow-zinc/5 not-prose"}>
			{data?.is_playing ? (
				<Play song_url={data.song_url} title={data.title} artist={data.artist}/>
			): (
				<NotPlay/>
			)}
		</div>
	);
};

