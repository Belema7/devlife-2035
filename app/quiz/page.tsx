"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TerminalLayout from '../../components/TerminalLayout';
import QuestionBlock from '../../components/QuestionBlock';
import LoadingSequence from '../../components/LoadingSequence';
import { QUESTIONS } from '../../lib/questions';
import { computeResult } from '../../lib/scoring';

export default function QuizPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleAnswer = (optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[currentStep] = optionIndex;
        setAnswers(newAnswers);

        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsLoading(true);
            // Wait for loading sequence to finish before navigating
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleLoadingComplete = () => {
        const result = computeResult(answers);
        localStorage.setItem('devlife_result', JSON.stringify(result));
        router.push('/result');
    };

    return (
        <TerminalLayout>
            {!isLoading ? (
                <QuestionBlock
                    question={QUESTIONS[currentStep]}
                    questionIndex={currentStep}
                    totalQuestions={QUESTIONS.length}
                    onAnswer={handleAnswer}
                    onBack={handleBack}
                    selectedOption={answers[currentStep]}
                />
            ) : (
                <LoadingSequence onComplete={handleLoadingComplete} />
            )}
        </TerminalLayout>
    );
}
