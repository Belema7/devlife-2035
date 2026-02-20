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

    let maxScores = {
        chaos: 0,
        aiDependency: 0,
        burnout: 0,
        cleanCode: 0,
        ego: 0,
    };

    // Calculate raw scores
    QUESTIONS.forEach((question, qIndex) => {
        question.options.forEach(option => {
            const mod = option.scoreModifier;
            if (mod.chaosScore) maxScores.chaos += mod.chaosScore;
            if (mod.aiDependencyScore) maxScores.aiDependency += mod.aiDependencyScore;
            if (mod.burnoutScore) maxScores.burnout += mod.burnoutScore;
            if (mod.cleanCodeScore) maxScores.cleanCode += mod.cleanCodeScore;
            if (mod.egoScore) maxScores.ego += mod.egoScore;
        });
    });

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

    const normalize = (val: number, max: number) =>
        max === 0 ? 0 : Math.round((val / max) * 100);

    const result: QuizResult = {
        archetype: '',
        chaos: normalize(scores.chaos, maxScores.chaos),
        aiDependency: normalize(scores.aiDependency, maxScores.aiDependency),
        burnout: normalize(scores.burnout, maxScores.burnout),
        cleanCode: normalize(scores.cleanCode, maxScores.cleanCode),
        ego: normalize(scores.ego, maxScores.ego),
    };

    // Archetype scoring based on RAW scores (not normalized)
    const archetypeWeights = [
        { id: 'AI_OVERLORD_DEPENDENT', val: scores.aiDependency * 1.6 + scores.chaos * 0.3 },
        { id: 'AI_PROMPT_GLADIATOR', val: scores.aiDependency * 1.4 + scores.ego * 0.8 },
        { id: 'CONTROL_FREAK_REFACTORER', val: scores.cleanCode * 1.5 + scores.ego * 0.5 },
        { id: 'CLEAN_CODE_ARCHITECT', val: scores.cleanCode * 1.8 },
        { id: 'BURNED_OUT_SENIOR', val: scores.burnout * 1.8 },
        { id: 'LEGACY_MONSTER_MAINTAINER', val: scores.burnout * 1.2 + scores.cleanCode * 0.5 },
        { id: 'FRAMEWORK_HOPPER_3000', val: scores.chaos * 1.5 + scores.ego * 0.5 },
        { id: 'FULL_STACK_WIZARD_EXHAUSTED', val: scores.cleanCode + scores.burnout + scores.chaos },
        { id: 'CSS_MAGICIAN_NIHILIST', val: scores.chaos * 1.1 + scores.burnout * 0.9 },
        { id: 'SECURITY_PARANOID_BOT', val: scores.cleanCode * 1.3 + scores.ego * 0.3 },
        { id: 'TUTORIAL_HELL_RESIDENT', val: scores.aiDependency * 0.9 + scores.chaos * 0.8 },
    ];

    archetypeWeights.sort((a, b) => b.val - a.val);
    result.archetype = archetypeWeights[0].id;

    return result;
}