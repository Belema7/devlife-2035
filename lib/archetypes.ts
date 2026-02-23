import { Archetype } from '../types/quiz';

export const ARCHETYPES: Record<string, Archetype> = {
    AI_OVERLORD_DEPENDENT: {
        id: 'AI_OVERLORD_DEPENDENT',
        title: 'AI Overlord Dependent',
        shortDescription: 'Your cursor hasn\'t moved in 3 years. You just describe things to a chatbot and hope for the best.',
        primaryRoast: `Your cursor has not moved in days.
You are just a human interface for a chatbot.
If the API goes down, so does your career.`,
        secondaryRoast: `Your identity has been replaced by a JSON response.
You do not write code, you copy-paste hallucinations.
You are the reason software is getting worse.`
    },
    LEGACY_MONSTER_MAINTAINER: {
        id: 'LEGACY_MONSTER_MAINTAINER',
        title: 'Legacy Monster Maintainer',
        shortDescription: 'You spend your days whispering to COBOL spirits and praying the mainframe doesn\'t notice your fear.',
        primaryRoast: `You are a digital archaeologist digging through cobwebs.
You fear the day the last person who understands the system retires.
You are the only thing standing between us and a total blackout.`,
        secondaryRoast: `You spend your life fixing bugs in code written before you were born.
Your skills are as obsolete as the hardware you maintain.
You are trapped in a loop of technical debt.`
    },
    FRAMEWORK_HOPPER_3000: {
        id: 'FRAMEWORK_HOPPER_3000',
        title: 'Framework Hopper 3000',
        shortDescription: 'You\'ve rewritten your "Hello World" app in 14 different experimental meta-frameworks this week.',
        primaryRoast: `You have more starred repos than lines of production code.
You rewrite your portfolio every weekend.
You are a tourist in every ecosystem and a resident in none.`,
        secondaryRoast: `Your codebase is a graveyard of experimental libraries.
You spend more time configuring build tools than solving problems.
You are chasing trends into a career dead end.`
    },
    BURNED_OUT_SENIOR: {
        id: 'BURNED_OUT_SENIOR',
        title: 'Burned-Out Senior',
        shortDescription: 'You communicate exclusively in sighs and Jira ticket closures. Your soul is a 404 error.',
        primaryRoast: `You have forgotten what it feels like to enjoy coding.
Your coffee is cold and your tickets are never-ending.
You are just waiting for the sweet release of retirement.`,
        secondaryRoast: `Your soul is a 404 error.
You have become a bottleneck of cynicism.
Every pull request you review dies a slow, painful death.`
    },
    CLEAN_CODE_ARCHITECT: {
        id: 'CLEAN_CODE_ARCHITECT',
        title: 'Clean Code Architect',
        shortDescription: 'You\'ve spent 40 hours perfecting an abstraction for a function that will be called exactly once.',
        primaryRoast: `You spend 40 hours naming a single variable.
Your abstractions are beautiful and completely useless.
You have created a cathedral where a shed would have sufficed.`,
        secondaryRoast: `Your code is so clean it does absolutely nothing.
You have successfully abstracted away all utility.
You are a philosopher, not a developer.`
    },
    FULL_STACK_WIZARD_EXHAUSTED: {
        id: 'FULL_STACK_WIZARD_EXHAUSTED',
        title: 'Exhausted Full-Stack Wizard',
        shortDescription: 'You can build an entire ecosystem in an afternoon, but you can\'t remember the last time you saw sunlight.',
        primaryRoast: `You can build an entire ecosystem in an afternoon.
But you have forgotten the color of the sun.
You are a one-person army with no reinforcements.`,
        secondaryRoast: `Your health is as unstable as a dev environment.
You are one urgent request away from a total system crash.
You are carrying the weight of the world on tired shoulders.`
    },
    CSS_MAGICIAN_NIHILIST: {
        id: 'CSS_MAGICIAN_NIHILIST',
        title: 'Nihilistic CSS Magician',
        shortDescription: 'You can center a div in 15 different ways, but you no longer believe that anything has meaning.',
        primaryRoast: `You can center a div in fifteen different ways.
But you no longer believe that anything has meaning.
You are a master of the surface with nothing underneath.`,
        secondaryRoast: `Your life is a series of media queries.
You have spent more time on z-index than on your own relationships.
Your world is a grid that never aligns.`
    },
    SECURITY_PARANOID_BOT: {
        id: 'SECURITY_PARANOID_BOT',
        title: 'Security Paranoid Bot',
        shortDescription: 'You\'ve encrypted your toaster. You don\'t trust your own code, and honestly, neither do we.',
        primaryRoast: `You have encrypted your toaster and your dreams.
You do not trust your own code or anyone else's.
You are living in a bunker of your own making.`,
        secondaryRoast: `Your security protocols are the reason nothing ever ships.
You have successfully made the system unusable in the name of safety.
You are your own biggest threat.`
    },
    TUTORIAL_HELL_RESIDENT: {
        id: 'TUTORIAL_HELL_RESIDENT',
        title: 'Tutorial Hell Resident',
        shortDescription: 'You have completed 450 courses but still haven\'t started your "portfolio" project.',
        primaryRoast: `You have completed four hundred courses this year.
But you still cannot start a project from scratch.
You are a professional student of things you will never build.`,
        secondaryRoast: `Your portfolio is just a collection of follow-along results.
You have zero original thoughts in your codebase.
You are a shadow of other people's expertise.`
    },
    AI_PROMPT_GLADIATOR: {
        id: 'AI_PROMPT_GLADIATOR',
        title: 'AI Prompt Gladiator',
        shortDescription: 'You don’t write code. You negotiate with machines and call it architecture.',
        primaryRoast: `You do not write code, you negotiate with machines.
You think you are an architect, but you are just a prompter.
Your value decreases with every model update.`,
        secondaryRoast: `You are the middleman that nobody asked for.
Your career is built on a house of cards that OpenAI owns.
You are a glorified copywriter.`
    },
    CONTROL_FREAK_REFACTORER: {
        id: 'CONTROL_FREAK_REFACTORER',
        title: 'Control Freak Refactorer',
        shortDescription: 'You refactor code that works just to prove it can be cleaner.',
        primaryRoast: `You refactor code that works just to prove it can be cleaner.
You are never satisfied with good enough.
You are the reason projects are never finished.`,
        secondaryRoast: `You are a perfectionist in a world of compromises.
You have rewritten the same module five times this month.
Your team hates your pull requests.`
    }
};


