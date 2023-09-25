import React from 'react';

const Button = () => {

    const words = [
        "Contactez-moi",
        "저에게 연락하세요",
    ];

    return (
        <a href={"mailto:hello@dereje.fr"} className={"flex no-underline text-rose-600 gap-4 w-max"}>
        <div  className="scrolling-text-container">
            <div className="scrolling-text">
                {words.map((word, index) => (
                    <div key={index}>
                        {word}
                    </div>
                ))}
                {words.map((word, index) => (
                    <div key={index + words.length}>
                        {word}
                    </div>
                ))}
            </div>
            <div className="fade-effect"></div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mt-1">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
            </svg>
        </a>
    );
};

export default Button;
