"use client";

import React from 'react';
import { Question } from '../types/quiz';
import Button from './ui/Button';

interface QuestionBlockProps {
    question: Question;
    onAnswer: (optionIndex: number) => void;
    onBack: () => void;
    questionIndex: number;
    totalQuestions: number;
    selectedOption?: number;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({
    question,
    onAnswer,
    onBack,
    questionIndex,
    totalQuestions,
    selectedOption
}) => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center text-xs opacity-50 mb-4">
                <div className="flex items-center space-x-4">
                    {questionIndex > 0 && (
                        <button
                            onClick={onBack}
                            className="hover:text-primary transition-colors cursor-pointer border border-primary/20 px-2 py-1"
                        >
                            &lt; BACK
                        </button>
                    )}
                    <span>QUESTION_{questionIndex + 1}_OF_${totalQuestions}</span>
                </div>
                <span>ID: {question.id.toString(16).padStart(4, '0').toUpperCase()}</span>
            </div>

            <h2 className="text-2xl font-bold mb-10 leading-relaxed">
                &gt; {question.text}
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {question.options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() => onAnswer(index)}
                        className={`text-left py-4 px-6 border-primary/30 hover:border-primary ${selectedOption === index ? 'bg-primary/20 border-primary' : ''
                            }`}
                    >
                        [{String.fromCharCode(65 + index)}] {option.text}
                    </Button>
                ))}
            </div>

            <div className="mt-12 overflow-hidden h-1 w-full bg-primary/10">
                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default QuestionBlock;
