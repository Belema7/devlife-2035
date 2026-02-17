import { Archetype } from '../types/quiz';

export const ARCHETYPES: Record<string, Archetype> = {
    AI_OVERLORD_DEPENDENT: {
        id: 'AI_OVERLORD_DEPENDENT',
        title: 'AI Overlord Dependent',
        shortDescription: 'Your cursor hasn\'t moved in 3 years. You just describe things to a chatbot and hope for the best.',
    },
    LEGACY_MONSTER_MAINTAINER: {
        id: 'LEGACY_MONSTER_MAINTAINER',
        title: 'Legacy Monster Maintainer',
        shortDescription: 'You spend your days whispering to COBOL spirits and praying the mainframe doesn\'t notice your fear.',
    },
    FRAMEWORK_HOPPER_3000: {
        id: 'FRAMEWORK_HOPPER_3000',
        title: 'Framework Hopper 3000',
        shortDescription: 'You\'ve rewritten your "Hello World" app in 14 different experimental meta-frameworks this week.',
    },
    BURNED_OUT_SENIOR: {
        id: 'BURNED_OUT_SENIOR',
        title: 'Burned-Out Senior',
        shortDescription: 'You communicate exclusively in sighs and Jira ticket closures. Your soul is a 404 error.',
    },
    CLEAN_CODE_ARCHITECT: {
        id: 'CLEAN_CODE_ARCHITECT',
        title: 'Clean Code Architect',
        shortDescription: 'You\'ve spent 40 hours perfecting an abstraction for a function that will be called exactly once.',
    },
};
