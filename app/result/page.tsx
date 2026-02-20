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
    const [roast, setRoast] = useState<string>("");
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const savedResult = localStorage.getItem('devlife_result');
        if (savedResult) {
            const parsed = JSON.parse(savedResult);
            setResult(parsed);
            fetchRoast(parsed);
        }
    }, []);

    const fetchRoast = async (diagnosticData: QuizResult) => {
        setIsGenerating(true);
        try {
            const response = await fetch('/api/roast', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(diagnosticData),
            });
            const data = await response.json();
            setRoast(data.roast);
        } catch (error) {
            setRoast("SYSTEM_ERROR: AI_COMMUNICATION_FAULT. You're probably just a Framework Hopper anyway.");
        } finally {
            setIsGenerating(false);
        }
    };

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
                <header className="space-y-2">
                    <div className="text-xs text-primary/50">FUTURE_PROFILE_DETECTED_AT_${new Date().getFullYear() + 9}</div>
                    <h1 className="text-3xl font-black glitch-text uppercase border-b border-primary/20 pb-4">
                        {archetype.title}
                    </h1>
                    <p className="text-2xl opacity-70 italic max-w-2xl text-yellow-600">
                        "{archetype.shortDescription}"
                    </p>
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
                        {isGenerating ? (
                            <div className="border border-primary/20 p-8 flex flex-col items-center justify-center space-y-4 bg-primary/2">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin rounded-full" />
                                <div className="text-[10px] animate-pulse">GENERATING_ROAST_VIA_NEURAL_LINK...</div>
                            </div>
                        ) : (
                            <RoastOutput roast={roast} />
                        )}
                    </div>
                </section>

                <footer className="pt-12 flex flex-col md:flex-row gap-4 justify-between border-t border-primary/10 mt-20">
                    <div className="flex gap-4">
                        <Button onClick={() => fetchRoast(result)}>Retry Diagnostic [R]</Button>
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
