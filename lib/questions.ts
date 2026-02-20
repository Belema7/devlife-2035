import { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "A critical production bug is reported at 4:55 PM on a Friday. Your response?",
        options: [
            { text: "Push a 'hotfix' without testing and vanish immediately.", scoreModifier: { chaosScore: 20, egoScore: 10 } },
            { text: "Blindly trust an AI-generated fix and deploy it.", scoreModifier: { aiDependencyScore: 20, burnoutScore: 5 } },
            { text: "Cancel your weekend to start a deep-dive investigation.", scoreModifier: { burnoutScore: 15, cleanCodeScore: 15 } },
            { text: "Publicly blame the most recent contributor and logout.", scoreModifier: { egoScore: 20, chaosScore: 5 } }
        ]
    },
    {
        id: 2,
        text: "The team lead proposes using a stable, well-documented framework.",
        options: [
            { text: "Lobby for an obscure, alpha-stage library you found on Reddit.", scoreModifier: { chaosScore: 20, egoScore: 15 } },
            { text: "Secretly implement a custom DSL over the weekend instead.", scoreModifier: { chaosScore: 15, cleanCodeScore: 15 } },
            { text: "Write a 10-page doc on why 'stable' means 'obsolete'.", scoreModifier: { burnoutScore: 10, egoScore: 15 } },
            { text: "Accept it, but complain about the boilerplate daily.", scoreModifier: { burnoutScore: 20 } }
        ]
    },
    {
        id: 3,
        text: "Assess your current browser tab situation.",
        options: [
            { text: "Minimalist. I close tabs the moment I'm done.", scoreModifier: { cleanCodeScore: 20, egoScore: 10 } },
            { text: "Standard. A few dozen StackOverflow and MDN pages.", scoreModifier: { burnoutScore: 5 } },
            { text: "Visual Noise. Hundreds of tabs I'm 'saving' for later.", scoreModifier: { chaosScore: 10, burnoutScore: 15 } },
            { text: "Crisis. My RAM is screaming and I've lost the original task.", scoreModifier: { chaosScore: 20, aiDependencyScore: 10 } }
        ]
    },
    {
        id: 4,
        text: "What is your genuine philosophy on Automated Testing?",
        options: [
            { text: "100% coverage is the only acceptable baseline.", scoreModifier: { cleanCodeScore: 20, burnoutScore: 15 } },
            { text: "I write tests only when a bug makes it to the CEO.", scoreModifier: { chaosScore: 15, egoScore: 5 } },
            { text: "Testing slows down my 'creative flow'.", scoreModifier: { chaosScore: 20, egoScore: 10 } },
            { text: "Tests are unnecessary if the AI says the code is fine.", scoreModifier: { aiDependencyScore: 25, chaosScore: 10 } }
        ]
    },
    {
        id: 5,
        text: "A junior developer asks for a code review on a Friday morning.",
        options: [
            { text: "Nitpick the indentation until they rethink their career.", scoreModifier: { egoScore: 20, cleanCodeScore: 15 } },
            { text: "Approve without looking. If it builds, it's their problem.", scoreModifier: { chaosScore: 20, burnoutScore: 10 } },
            { text: "Rewrite the entire PR because it doesn't use your pattern.", scoreModifier: { egoScore: 15, cleanCodeScore: 10 } },
            { text: "Redirect them to a chatbot for 'architectural guidance'.", scoreModifier: { aiDependencyScore: 20, burnoutScore: 5 } }
        ]
    },
    {
        id: 6,
        text: "How do you approach a 10-year-old legacy codebase?",
        options: [
            { text: "It's a masterpiece of survivor bias. I respect the elders.", scoreModifier: { burnoutScore: 15 } },
            { text: "Proposal: Burn it down and rewrite in a trendy language.", scoreModifier: { chaosScore: 20, egoScore: 15 } },
            { text: "I carefully untangle it, losing my mind in the process.", scoreModifier: { cleanCodeScore: 15, burnoutScore: 20 } },
            { text: "I wrap it in so many layers of AI-generated wrappers I forget it exists.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } }
        ]
    },
    {
        id: 7,
        text: "What is your relationship with Documentation?",
        options: [
            { text: "The code is self-documenting (spoiler: it isn't).", scoreModifier: { chaosScore: 15, egoScore: 10 } },
            { text: "I have a private wiki that is perfectly maintained and unused.", scoreModifier: { cleanCodeScore: 20, burnoutScore: 15 } },
            { text: "I use AI to write it, but I don't trust what it says.", scoreModifier: { aiDependencyScore: 20, burnoutScore: 10 } },
            { text: "Documentation is a 'future me' problem.", scoreModifier: { chaosScore: 20, burnoutScore: 5 } }
        ]
    },
    {
        id: 8,
        text: "A new security vulnerability is announced for a library you use.",
        options: [
            { text: "Immediately patch it and audit the entire system.", scoreModifier: { cleanCodeScore: 15, burnoutScore: 10 } },
            { text: "Assume it's fine unless we get hacked.", scoreModifier: { chaosScore: 25, egoScore: 5 } },
            { text: "Ask the AI if our specific implementation is vulnerable.", scoreModifier: { aiDependencyScore: 20, chaosScore: 5 } },
            { text: "Tell the stakeholders it's 'under control' while sweating.", scoreModifier: { burnoutScore: 15, egoScore: 10 } }
        ]
    },
    {
        id: 9,
        text: "How did you learn your most recent skill?",
        options: [
            { text: "Read the source code and documentation meticulously.", scoreModifier: { cleanCodeScore: 15, burnoutScore: 10 } },
            { text: "Followed a 12-hour YouTube tutorial on 2x speed.", scoreModifier: { chaosScore: 10, burnoutScore: 5 } },
            { text: "I just asked a LLM to explain it to me like I'm five.", scoreModifier: { aiDependencyScore: 25 } },
            { text: "I didn't. I just copy-pasted until the errors stopped.", scoreModifier: { chaosScore: 20, aiDependencyScore: 10 } }
        ]
    },
    {
        id: 10,
        text: "Where do you see your career in 2035?",
        options: [
            { text: "The last human who knows how a 'pointer' works.", scoreModifier: { egoScore: 25, cleanCodeScore: 10 } },
            { text: "Contentedly living in a cabin, far from any silicon.", scoreModifier: { burnoutScore: 20, chaosScore: 10 } },
            { text: "Prompter-in-Chief for a Fortune 500 company.", scoreModifier: { aiDependencyScore: 25, egoScore: 10 } },
            { text: "Still trying to fix that one bug from 2024.", scoreModifier: { burnoutScore: 25, chaosScore: 5 } }
        ]
    },
    {
        id: 11,
        text: "How do you handle centering a complex UI element?",
        options: [
            { text: "Flexbox/Grid with mathematical precision.", scoreModifier: { cleanCodeScore: 15 } },
            { text: "Randomly add 'margin: auto' and 'position: absolute' until it works.", scoreModifier: { chaosScore: 20 } },
            { text: "I ignore the UI and focus on the 'real' backend logic.", scoreModifier: { egoScore: 15, burnoutScore: 5 } },
            { text: "I just use a component library and hope it's centered.", scoreModifier: { aiDependencyScore: 10, burnoutScore: 5 } }
        ]
    },
    {
        id: 12,
        text: "Your thoughts on 'Clean Code' principles?",
        options: [
            { text: "My only reason for living. I dream in SOLID.", scoreModifier: { cleanCodeScore: 25, burnoutScore: 10 } },
            { text: "A luxury we cannot afford in this economy.", scoreModifier: { chaosScore: 15, burnoutScore: 10 } },
            { text: "I use them to make others feel inferior during reviews.", scoreModifier: { egoScore: 25, cleanCodeScore: 15 } },
            { text: "I let the AI refactor it once I'm done with the mess.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } }
        ]
    }
];
