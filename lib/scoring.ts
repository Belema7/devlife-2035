import { QuizResult } from '../types/quiz';
import { QUESTIONS } from './questions';

export function computeResult(answers: number[]): QuizResult {
    const scores = {
        chaos: 0,
        aiDependency: 0,
        burnout: 0,
        cleanCode: 0,
        ego: 0,
    };

    // Calculate raw scores
    answers.forEach((optionIndex, questionIndex) => {
        const question = QUESTIONS[questionIndex];
        if (!question) return;

        const option = question.options[optionIndex];
        if (!option) return;

        const mod = option.scoreModifier;
        if (mod.chaosScore) scores.chaos += mod.chaosScore;
        if (mod.aiDependencyScore) scores.aiDependency += mod.aiDependencyScore;
        if (mod.burnoutScore) scores.burnout += mod.burnoutScore;
        if (mod.cleanCodeScore) scores.cleanCode += mod.cleanCodeScore;
        if (mod.egoScore) scores.ego += mod.egoScore;
    });

    // Normalize scores to 0-100
    // Max possible score varies, but we'll normalize based on the number of questions
    // Max score per question is around 25 per trait.
    const maxPossible = QUESTIONS.length * 15; // Conservative average max
    const normalize = (val: number) => Math.min(100, Math.max(0, Math.round((val / maxPossible) * 100)));

    const result: QuizResult = {
        archetype: '',
        chaos: normalize(scores.chaos),
        aiDependency: normalize(scores.aiDependency),
        burnout: normalize(scores.burnout),
        cleanCode: normalize(scores.cleanCode),
        ego: normalize(scores.ego),
    };

    // Determine dominant archetype with more nuanced logic
    const traits = [
        { id: 'AI_OVERLORD_DEPENDENT', val: result.aiDependency * 1.5 },
        { id: 'LEGACY_MONSTER_MAINTAINER', val: result.burnout * 0.8 + result.chaos * 0.4 },
        { id: 'FRAMEWORK_HOPPER_3000', val: result.chaos * 1.2 + result.ego * 0.3 },
        { id: 'CLEAN_CODE_ARCHITECT', val: result.cleanCode * 1.5 },
        { id: 'BURNED_OUT_SENIOR', val: result.burnout * 1.5 },
        { id: 'FULL_STACK_WIZARD_EXHAUSTED', val: (result.cleanCode + result.chaos + result.burnout) / 2 },
        { id: 'CSS_MAGICIAN_NIHILIST', val: result.chaos * 0.8 + result.burnout * 0.7 },
        { id: 'SECURITY_PARANOID_BOT', val: result.cleanCode * 1.2 + result.ego * 0.5 },
        { id: 'TUTORIAL_HELL_RESIDENT', val: result.aiDependency * 0.8 + result.chaos * 0.5 },
    ];

    // Sort by value descending
    traits.sort((a, b) => b.val - a.val);
    result.archetype = traits[0].id;

    return result;
}
