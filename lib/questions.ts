import { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "How do you handle a production bug discovered on Friday at 4:55 PM?",
        options: [
            { text: "Force push a 'quick fix' and immediately close your laptop.", scoreModifier: { chaosScore: 20, egoScore: 10 } },
            { text: "Ask ChatGPT to write a fix and paste it without reading.", scoreModifier: { aiDependencyScore: 20, burnoutScore: 5 } },
            { text: "Start a 4-hour post-mortem on Slack while crying.", scoreModifier: { burnoutScore: 15, cleanCodeScore: 10 } },
            { text: "Blame the intern and go for a beer.", scoreModifier: { egoScore: 20, chaosScore: 5 } }
        ]
    },
    {
        id: 2,
        text: "Your tech lead suggests using a stable, boring framework for the new project.",
        options: [
            { text: "Quit and start a new job that uses a framework released 2 hours ago.", scoreModifier: { chaosScore: 20, egoScore: 15 } },
            { text: "Agree, then secretly implement it in Haskell.", scoreModifier: { chaosScore: 15, cleanCodeScore: 15 } },
            { text: "Spend 3 days 'researching' why it's a terrible idea.", scoreModifier: { burnoutScore: 10, egoScore: 10 } },
            { text: "Accept your fate and start writing the boilerplate.", scoreModifier: { burnoutScore: 20 } }
        ]
    },
    {
        id: 3,
        text: "How many browser tabs do you have open right now?",
        options: [
            { text: "0-10: I am a machine.", scoreModifier: { cleanCodeScore: 20, egoScore: 10 } },
            { text: "11-50: Normal developer misery.", scoreModifier: { burnoutScore: 5 } },
            { text: "50-200: Help me.", scoreModifier: { chaosScore: 10, burnoutScore: 15 } },
            { text: "My browser crashed 20 minutes ago.", scoreModifier: { chaosScore: 20, aiDependencyScore: 10 } }
        ]
    },
    {
        id: 4,
        text: "What's your stance on unit tests?",
        options: [
            { text: "They are my religion. Even the tests have tests.", scoreModifier: { cleanCodeScore: 20, burnoutScore: 10 } },
            { text: "I write them after the feature is already in production.", scoreModifier: { chaosScore: 10, egoScore: 10 } },
            { text: "If it compiles, it works.", scoreModifier: { chaosScore: 20, egoScore: 5 } },
            { text: "Testing is for people who don't trust their AI.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } }
        ]
    },
    {
        id: 5,
        text: "A junior dev asks you for a code review. What do you do?",
        options: [
            { text: "Request 'Minor' changes to 47 unrelated files.", scoreModifier: { egoScore: 20, cleanCodeScore: 10 } },
            { text: "LGTM! (I didn't open the PR).", scoreModifier: { chaosScore: 15, burnoutScore: 5 } },
            { text: "Spend 2 hours explaining why they should use a monad.", scoreModifier: { egoScore: 15, cleanCodeScore: 10 } },
            { text: "Forward the PR link to Copilot.", scoreModifier: { aiDependencyScore: 20, burnoutScore: 5 } }
        ]
    },
    {
        id: 6,
        text: "What is your primary source of nutrition during a sprint?",
        options: [
            { text: "Cold brew and pure spite.", scoreModifier: { burnoutScore: 20, egoScore: 5 } },
            { text: "Soylent and existential dread.", scoreModifier: { cleanCodeScore: 10, burnoutScore: 10 } },
            { text: "DoorDash and whatever is in the breakroom.", scoreModifier: { chaosScore: 10 } },
            { text: "I don't eat, I just prompt.", scoreModifier: { aiDependencyScore: 20, chaosScore: 5 } }
        ]
    },
    {
        id: 7,
        text: "How do you feel about Documentation?",
        options: [
            { text: "Code is the documentation.", scoreModifier: { chaosScore: 15, egoScore: 10 } },
            { text: "I love it, but never actually write it.", scoreModifier: { burnoutScore: 5 } },
            { text: "I generate it with AI and never check it.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } },
            { text: "I have a 400-page Wiki that no one reads.", scoreModifier: { cleanCodeScore: 20, burnoutScore: 15 } }
        ]
    },
    {
        id: 8,
        text: "You encounter a 'legacy' codebase. How legacy is it?",
        options: [
            { text: "It was written in jQuery yesterday.", scoreModifier: { chaosScore: 10, burnoutScore: 5 } },
            { text: "The original dev retired in 2004.", scoreModifier: { burnoutScore: 15 } },
            { text: "It's running on a server that no one knows the location of.", scoreModifier: { chaosScore: 20, burnoutScore: 20 } },
            { text: "I am currently rewriting it in Rust.", scoreModifier: { egoScore: 20, cleanCodeScore: 10 } }
        ]
    },
    {
        id: 9,
        text: "Your internet goes out. What do you do?",
        options: [
            { text: "Panic. I forgot how to write `map()` without Stack Overflow.", scoreModifier: { aiDependencyScore: 20, chaosScore: 5 } },
            { text: "Stare at the blank cursor until it comes back.", scoreModifier: { burnoutScore: 20 } },
            { text: "Actually write logic with my brain.", scoreModifier: { egoScore: 15, cleanCodeScore: 10 } },
            { text: "Go outside and try to find where the cloud is.", scoreModifier: { chaosScore: 20 } }
        ]
    },
    {
        id: 10,
        text: "What is your career goal for 2035?",
        options: [
            { text: "To be the last human dev on earth.", scoreModifier: { egoScore: 20, burnoutScore: 10 } },
            { text: "To finally understand Webpack.", scoreModifier: { burnoutScore: 20, chaosScore: 5 } },
            { text: "To own the AI that replaces me.", scoreModifier: { aiDependencyScore: 20, egoScore: 10 } },
            { text: "To live in a cabin with no electronics.", scoreModifier: { burnoutScore: 10, chaosScore: 15 } }
        ]
    }
];
