"use client";

import React from 'react';
import Typewriter from './Typewriter';

interface RoastOutputProps {
    roast: string;
}

const RoastOutput: React.FC<RoastOutputProps> = ({ roast }) => {
    return (
        <div className="mt-10 border-l-2 border-alert/50 pl-6 py-4 bg-alert/5 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-alert/30 uppercase">
                AI_ROAST_GENERATED
            </div>
            <div className="text-alert font-bold text-lg mb-4 glitch-text">
                &gt; DIAGNOSTIC_ANALYSIS_COMPLETE:
            </div>
            <div className="text-primary/90 leading-relaxed italic">
                <Typewriter text={roast} speed={5} />
            </div>
        </div>
    );
};

export default RoastOutput;
