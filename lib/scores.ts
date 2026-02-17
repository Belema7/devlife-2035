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

    // Normalize to 0-100 scale based on max possible score per trait
    // (Approximated based on max possible per trait in questions)
    const normalize = (val: number) => Math.min(100, Math.max(0, val));

    const result: QuizResult = {
        archetype: '',
        chaos: normalize(scores.chaos),
        aiDependency: normalize(scores.aiDependency),
        burnout: normalize(scores.burnout),
        cleanCode: normalize(scores.cleanCode),
        ego: normalize(scores.ego),
    };

    // Determine dominant archetype
    const traits = [
        { id: 'AI_OVERLORD_DEPENDENT', val: result.aiDependency },
        { id: 'LEGACY_MONSTER_MAINTAINER', val: result.burnout + result.chaos / 2 },
        { id: 'FRAMEWORK_HOPPER_3000', val: result.chaos + result.ego / 2 },
        { id: 'CLEAN_CODE_ARCHITECT', val: result.cleanCode },
        { id: 'BURNED_OUT_SENIOR', val: result.burnout },
    ];

    traits.sort((a, b) => b.val - a.val);
    result.archetype = traits[0].id;

    return result;
}
