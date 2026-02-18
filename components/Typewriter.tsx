"use client";

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 30,
    delay = 0,
    onComplete,
    className = ""
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.substring(0, displayedText.length + 1));
            }, speed);
            return () => clearTimeout(timer);
        } else if (onComplete) {
            onComplete();
        }
    }, [displayedText, text, speed, isStarted, onComplete]);

    return (
        <div className={className}>
            {displayedText}
            {displayedText.length < text.length && isStarted && (
                <span className="inline-block w-2 h-5 bg-primary ml-1 animate-blink" />
            )}
        </div>
    );
};

export default Typewriter;
