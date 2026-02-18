import React from 'react';

interface MetricBarProps {
    label: string;
    value: number;
}

const MetricBar: React.FC<MetricBarProps> = ({ label, value }) => {
    const percentage = Math.round(value);
    const totalBlocks = 20;
    const activeBlocks = Math.floor((percentage / 100) * totalBlocks);
    const inactiveBlocks = totalBlocks - activeBlocks;

    const bar = "█".repeat(activeBlocks) + "░".repeat(inactiveBlocks);

    return (
        <div className="font-mono mb-4">
            <div className="flex justify-between text-xs mb-1 opacity-70">
                <span className="uppercase">{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="text-primary text-xl tracking-tighter overflow-hidden whitespace-nowrap">
                {bar}
            </div>
        </div>
    );
};

export default MetricBar;
