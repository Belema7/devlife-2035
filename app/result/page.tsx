"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TerminalLayout from '../../components/TerminalLayout';
import MetricBar from '../../components/MetricBar';
import RoastOutput from '../../components/RoastOutput';
import Button from '../../components/ui/Button';
import { QuizResult } from '../../types/quiz';
import { ARCHETYPES } from '../../lib/archetypes';

export default function ResultPage() {
    const [result, setResult] = useState<QuizResult | null>(null);

    useEffect(() => {
        const savedResult = localStorage.getItem('devlife_result');
        if (savedResult) {
            setResult(JSON.parse(savedResult));
        }
    }, []);

    if (!result) {
        return (
            <TerminalLayout>
                <div className="text-center py-20 animate-pulse">
                    ACCESSING_LOCAL_STORAGE... DATA_CORRUPTED_OR_MISSING
                </div>
            </TerminalLayout>
        );
    }

    const archetype = ARCHETYPES[result.archetype] || ARCHETYPES.BURNED_OUT_SENIOR;

    return (
        <TerminalLayout>
            <div className="space-y-12">
                <header className="space-y-4">
                    <div className="text-xs text-primary/50">FUTURE_PROFILE_DETECTED_AT_${new Date().getFullYear() + 9}</div>
                    <h1 className="text-3xl font-black glitch-text uppercase border-b border-primary/20 pb-4">
                        {archetype.title}
                    </h1>
                    <div className="text-xl opacity-80 italic max-w-2xl text-yellow-600 space-y-1 whitespace-pre-line">
                        {archetype.primaryRoast}
                    </div>
                </header>

                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">Diagnostic_Metrics</h3>
                        <div className="space-y-2">
                            <MetricBar label="Chaos_Level" value={result.chaos} />
                            <MetricBar label="AI_Dependency" value={result.aiDependency} />
                            <MetricBar label="Burnout_Index" value={result.burnout} />
                            <MetricBar label="Clean_Code_Obsession" value={result.cleanCode} />
                            <MetricBar label="Ego_Magnitude" value={result.ego} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest">System_Verdict</h3>
                        <RoastOutput roast={archetype.secondaryRoast} />
                    </div>
                </section>

                <footer className="pt-12 flex flex-col md:flex-row gap-4 justify-between border-t border-primary/10 mt-20">
                    <div className="flex gap-4">
                        <Link href="/">
                            <Button variant="alert">Wipe Data [DEL]</Button>
                        </Link>
                    </div>
                    <div className="text-[10px] opacity-20 text-right uppercase self-end">
                        Session_ID: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>
                </footer>
            </div>
        </TerminalLayout>
    );
}
