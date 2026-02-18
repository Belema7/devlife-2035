"use client";

import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const LOGS = [
    "SCANNING CONSOLE.LOG FREQUENCY...",
    "ANALYZING STACK INSTABILITY...",
    "PROJECTING REGRET INDEX...",
    "CALCULATING AI DEPENDENCY...",
    "MAP-REDUCE ON EXISTENTIAL DREAD...",
    "PARSING DEPRECATED SOUL MODULES...",
    "FINALIZING FUTURE ARCHETYPE..."
];

interface LoadingSequenceProps {
    onComplete: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
    const [currentLogIndex, setCurrentLogIndex] = useState(0);

    useEffect(() => {
        if (currentLogIndex < LOGS.length) {
            const timer = setTimeout(() => {
                setCurrentLogIndex(prev => prev + 1);
            }, 400 + Math.random() * 800);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(onComplete, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentLogIndex, onComplete]);

    return (
        <div className="space-y-4 py-20">
            <div className="text-primary/50 text-xs mb-8">DIAGNOSTIC_IN_PROGRESS...</div>

            {LOGS.slice(0, currentLogIndex).map((log, i) => (
                <div key={i} className="flex gap-4 items-center">
                    <span className="text-primary/30 text-xs">[{new Date().toLocaleTimeString()}]</span>
                    <span className={i === currentLogIndex - 1 ? "animate-pulse" : "opacity-80"}>
                        {log}
                    </span>
                    {i === currentLogIndex - 1 && (
                        <span className="text-[10px] text-primary/40">[SUCCESS]</span>
                    )}
                </div>
            ))}

            {currentLogIndex < LOGS.length && (
                <div className="flex gap-4 items-center">
                    <span className="text-primary/30 text-xs">[{new Date().toLocaleTimeString()}]</span>
                    <Typewriter
                        text={LOGS[currentLogIndex]}
                        speed={20}
                    />
                </div>
            )}
        </div>
    );
};

export default LoadingSequence;
