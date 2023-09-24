import React, { useState, useEffect } from 'react';

const Button = () => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const words = [
        "Contactez-moi",
        "저에게 연락하세요",
        "Contact Me"
    ];


    useEffect(() => {
        setCurrentText(words[index]);

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 500);
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, [index, words]);

    return (
        <a className="bg-rose-500 text-white px-4 py-2 rounded-md font-medium no-underline flex items-center gap-2 text-base w-min" href="mailto:hello@dereje.fr">
            <div className={`relative w-[130px] overflow-hidden h-6 flex items-center ${isTransitioning ? 'opacity-0 transition-opacity ease-in-out' : ''}`}>
                <span className={`absolute w-max transition-all duration-500 ease-in-out ${isTransitioning ? '-translate-y-full' : 'translate-y-0 opacity-100 transition-opacity'}`}>
            {currentText}
            </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mt-1">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
            </svg>
        </a>
    );
};

export default Button;
