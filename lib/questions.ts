import { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "A production bug appears at 4:55 PM on Friday. What do you do?",
    options: [
      { text: "Deploy a quick patch without testing and disappear.", scoreModifier: { chaosScore: 20, egoScore: 10 } },
      { text: "Ask AI for a fix and deploy it.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } },
      { text: "Cancel plans and investigate properly.", scoreModifier: { burnoutScore: 20, cleanCodeScore: 15 } },
      { text: "Blame the last commit and log off.", scoreModifier: { egoScore: 20, chaosScore: 5 } }
    ]
  },

  {
    id: 2,
    text: "Your team suggests using a stable, proven framework.",
    options: [
      { text: "Push for a new experimental framework.", scoreModifier: { chaosScore: 20, egoScore: 15 } },
      { text: "Build your own mini framework.", scoreModifier: { cleanCodeScore: 15, egoScore: 10 } },
      { text: "Accept it but complain constantly.", scoreModifier: { burnoutScore: 20 } },
      { text: "Ask AI what’s trending before deciding.", scoreModifier: { aiDependencyScore: 20 } }
    ]
  },

  {
    id: 3,
    text: "Your browser tab situation?",
    options: [
      { text: "Minimal and organized.", scoreModifier: { cleanCodeScore: 20 } },
      { text: "Dozens of documentation tabs.", scoreModifier: { burnoutScore: 10 } },
      { text: "Hundreds I’ll read 'later'.", scoreModifier: { chaosScore: 15, burnoutScore: 15 } },
      { text: "RAM is suffering and so am I.", scoreModifier: { chaosScore: 20, aiDependencyScore: 10 } }
    ]
  },

  {
    id: 4,
    text: "Your philosophy on automated tests?",
    options: [
      { text: "100% coverage is mandatory.", scoreModifier: { cleanCodeScore: 25, burnoutScore: 10 } },
      { text: "Tests after production breaks.", scoreModifier: { chaosScore: 20 } },
      { text: "Tests slow me down.", scoreModifier: { egoScore: 10, chaosScore: 15 } },
      { text: "AI generates them for me.", scoreModifier: { aiDependencyScore: 25 } }
    ]
  },

  {
    id: 5,
    text: "A junior asks for help debugging.",
    options: [
      { text: "Guide them patiently.", scoreModifier: { cleanCodeScore: 10 } },
      { text: "Rewrite their code yourself.", scoreModifier: { egoScore: 15, burnoutScore: 10 } },
      { text: "Send them documentation links.", scoreModifier: { egoScore: 5 } },
      { text: "Tell them to ask AI.", scoreModifier: { aiDependencyScore: 20 } }
    ]
  },

  {
    id: 6,
    text: "You inherit a 10-year-old legacy system.",
    options: [
      { text: "Respect and improve it slowly.", scoreModifier: { burnoutScore: 15 } },
      { text: "Rewrite everything.", scoreModifier: { chaosScore: 20, egoScore: 15 } },
      { text: "Refactor carefully, even if painful.", scoreModifier: { cleanCodeScore: 15, burnoutScore: 20 } },
      { text: "Wrap it in AI-generated abstractions.", scoreModifier: { aiDependencyScore: 20, chaosScore: 10 } }
    ]
  },

  {
    id: 7,
    text: "How do you document your work?",
    options: [
      { text: "Clear and updated docs.", scoreModifier: { cleanCodeScore: 20 } },
      { text: "Code explains itself.", scoreModifier: { egoScore: 10, chaosScore: 15 } },
      { text: "AI writes it.", scoreModifier: { aiDependencyScore: 20 } },
      { text: "Documentation is future-me’s problem.", scoreModifier: { chaosScore: 20 } }
    ]
  },

  {
    id: 8,
    text: "A major security vulnerability is announced.",
    options: [
      { text: "Patch immediately and audit.", scoreModifier: { cleanCodeScore: 15, burnoutScore: 10 } },
      { text: "Wait and see.", scoreModifier: { chaosScore: 25 } },
      { text: "Ask AI for risk analysis.", scoreModifier: { aiDependencyScore: 20 } },
      { text: "Pretend it's under control.", scoreModifier: { egoScore: 10, burnoutScore: 15 } }
    ]
  },

  {
    id: 9,
    text: "How do you learn new tech?",
    options: [
      { text: "Read official docs deeply.", scoreModifier: { cleanCodeScore: 20 } },
      { text: "Watch tutorials.", scoreModifier: { burnoutScore: 10 } },
      { text: "Ask AI to summarize it.", scoreModifier: { aiDependencyScore: 25 } },
      { text: "Copy-paste until it works.", scoreModifier: { chaosScore: 20 } }
    ]
  },

  {
    id: 10,
    text: "You are given a tight deadline.",
    options: [
      { text: "Cut corners and ship fast.", scoreModifier: { chaosScore: 20 } },
      { text: "Work late to maintain quality.", scoreModifier: { burnoutScore: 20, cleanCodeScore: 10 } },
      { text: "Delegate everything.", scoreModifier: { egoScore: 10 } },
      { text: "Ask AI to speed everything up.", scoreModifier: { aiDependencyScore: 20 } }
    ]
  },

  {
    id: 11,
    text: "How do you feel about refactoring working code?",
    options: [
      { text: "If it works, don’t touch it.", scoreModifier: { chaosScore: 15 } },
      { text: "Refactor for clarity and maintainability.", scoreModifier: { cleanCodeScore: 20 } },
      { text: "Refactor to show superiority.", scoreModifier: { egoScore: 20 } },
      { text: "Let AI optimize it later.", scoreModifier: { aiDependencyScore: 15 } }
    ]
  },

  {
    id: 12,
    text: "Your reaction to code reviews on your work?",
    options: [
      { text: "I welcome feedback.", scoreModifier: { cleanCodeScore: 10 } },
      { text: "Defend every line aggressively.", scoreModifier: { egoScore: 20 } },
      { text: "Ignore comments.", scoreModifier: { chaosScore: 15 } },
      { text: "Ask AI if reviewer is wrong.", scoreModifier: { aiDependencyScore: 15 } }
    ]
  }
];