import { Archetype } from '../types/quiz';

export const ARCHETYPES: Record<string, Archetype> = {
    AI_OVERLORD_DEPENDENT: {
        id: 'AI_OVERLORD_DEPENDENT',
        title: 'AI Overlord Dependent',
        shortDescription: 'Your cursor hasn\'t moved in 3 years. You just describe things to a chatbot and hope for the best.',
        primaryRoast: `You do not solve problems.
You wait for autocomplete to think for you.
If the internet blinks, your skills disappear.`,

    secondaryRoast: `You cannot debug without asking a machine first.
Your confidence is rented, not owned.
Take away the tools and you are just guessing loudly.`
    },
    LEGACY_MONSTER_MAINTAINER: {
        id: 'LEGACY_MONSTER_MAINTAINER',
        title: 'Legacy Monster Maintainer',
        shortDescription: 'You spend your days whispering to COBOL spirits and praying the mainframe doesn\'t notice your fear.',
            primaryRoast: `You survive by fear and undocumented behavior.
Every deploy feels like defusing a bomb.
You are maintaining history, not building the future.`,

    secondaryRoast: `You are trapped in a museum of bad decisions.
Nothing improves, it only survives.
Your career runs on life support.`
    },
    FRAMEWORK_HOPPER_3000: {
        id: 'FRAMEWORK_HOPPER_3000',
        title: 'Framework Hopper 3000',
        shortDescription: 'You\'ve rewritten your "Hello World" app in 14 different experimental meta-frameworks this week.',
        primaryRoast: `You switch stacks before mastering basics.
Your resume is wide and painfully shallow.
You chase hype because depth scares you.`,

    secondaryRoast: `You rebuild everything except your fundamentals.
Your GitHub is noise without substance.
You are busy, not valuable.`
    },
    BURNED_OUT_SENIOR: {
        id: 'BURNED_OUT_SENIOR',
        title: 'Burned-Out Senior',
        shortDescription: 'You communicate exclusively in sighs and Jira ticket closures. Your soul is a 404 error.',
        primaryRoast: `You no longer argue, you just approve.
Your passion expired three companies ago.
You are here for the paycheck and nothing else.`,

    secondaryRoast: `You mentor with sarcasm and deploy with resentment.
Every meeting drains what little energy remains.
You are not leading, you are surviving.`
    },
    CLEAN_CODE_ARCHITECT: {
        id: 'CLEAN_CODE_ARCHITECT',
        title: 'Clean Code Architect',
        shortDescription: 'You\'ve spent 40 hours perfecting an abstraction for a function that will be called exactly once.',
        primaryRoast: `You optimize patterns nobody asked for.
Your abstractions solve imaginary problems.
You built elegance where speed was needed.`,

    secondaryRoast: `You turned simple code into academic research.
Nobody understands it, including you.
You value beauty over delivery every time.`
    },
    FULL_STACK_WIZARD_EXHAUSTED: {
        id: 'FULL_STACK_WIZARD_EXHAUSTED',
        title: 'Exhausted Full-Stack Wizard',
        shortDescription: 'You can build an entire ecosystem in an afternoon, but you can\'t remember the last time you saw sunlight.',
        primaryRoast: `You are a jack of all trades and master of exhaustion.
You build everything but rest and balance.
Your code is full stack, your life is empty.`,

    secondaryRoast: `You are a one-person band playing to an empty room.
Your burnout is the price of your versatility.
You can create worlds but not a sustainable one for yourself.`
    },
    CSS_MAGICIAN_NIHILIST: {
        id: 'CSS_MAGICIAN_NIHILIST',
        title: 'Nihilistic CSS Magician',
        shortDescription: 'You can center a div in 15 different ways, but you no longer believe that anything has meaning.',
        primaryRoast: `You control pixels but not direction.
Your layouts are perfect and pointless.
You mastered styling, not impact.`,

    secondaryRoast: `You argue about spacing while features burn.
You fix alignment like it saves the product.
You are polishing a sinking ship.`
    },
    SECURITY_PARANOID_BOT: {
        id: 'SECURITY_PARANOID_BOT',
        title: 'Security Paranoid Bot',
        shortDescription: 'You\'ve encrypted your toaster. You don\'t trust your own code, and honestly, neither do we.',
        primaryRoast: `You block features before they exist.
Nothing ships without ten threat models.
You built a vault with nothing inside.`,

    secondaryRoast: `You treat teammates like attackers.
Your paranoia delays everything.
You secured the system into irrelevance.`
    },

    TUTORIAL_HELL_RESIDENT: {
        id: 'TUTORIAL_HELL_RESIDENT',
        title: 'Tutorial Hell Resident',
        shortDescription: 'You have completed 450 courses but still haven\'t started your "portfolio" project.',
        primaryRoast: `You learn constantly and build nothing.
Your progress lives inside video players.
You fear the blank project screen.`,

    secondaryRoast: `You copy patterns without understanding them.
Your confidence resets every new task.
You are educated and unproven.`
    },
    AI_PROMPT_GLADIATOR: {
        id: 'AI_PROMPT_GLADIATOR',
        title: 'AI Prompt Gladiator',
        shortDescription: 'You don’t write code. You negotiate with machines and call it architecture.',
        primaryRoast: `You refine prompts instead of skills.
Your workflow depends on better wording.
You outsource thinking and call it strategy.`,

    secondaryRoast: `You mistake automation for expertise.
Your leverage disappears when models change.
You are replaceable by the next interface.`
    },
    CONTROL_FREAK_REFACTORER: {
        id: 'CONTROL_FREAK_REFACTORER',
        title: 'Control Freak Refactorer',
        shortDescription: 'You refactor code that works just to prove it can be cleaner.',
       primaryRoast: `You rewrite working code for satisfaction.
Progress slows whenever you get inspired.
You value control more than momentum.`,

    secondaryRoast: `You cannot leave anything untouched.
Your need for perfection blocks real delivery.
You refactor trust out of your own team.`
    }
};


