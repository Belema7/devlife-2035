"use client";

import React from 'react';
import Typewriter from './Typewriter';

interface RoastOutputProps {
    roast: string;
}

const RoastOutput: React.FC<RoastOutputProps> = ({ roast }) => {
    return (
        <div className="mt-10 border-l-2 border-alert/50 pl-6 py-4 bg-alert/5 relative">
            <div className="text-alert font-bold text-lg mb-4 glitch-text">
                &gt; FINAL_VERDICT_CONFIRMED:
            </div>
            <div className="text-primary/90 leading-relaxed italic whitespace-pre-line">
                <Typewriter text={roast} speed={3} />
            </div>
        </div>
    );
};

export default RoastOutput;
