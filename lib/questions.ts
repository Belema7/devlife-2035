import { Question } from "../types/quiz";

export const QUESTIONS: Question[] = [
  {
    id: "friday-incident",
    prompt: "A critical production issue is reported Friday at 4:55 PM. What’s your move?",
    options: [
      {
        id: "hotfix-blind",
        label: "Ship a hotfix directly to main and hope observability catches it.",
        effects: { chaos: 20, ego: 10 },
      },
      {
        id: "analyze-root",
        label: "Stabilize the system, write a quick RCA plan, and schedule proper remediation.",
        effects: { cleanCode: 20 },
      },
      {
        id: "ai-patch",
        label: "Generate a patch with AI and deploy after a quick skim.",
        effects: { aiDependency: 20, chaos: 5 },
      },
      {
        id: "delay-monday",
        label: "Mitigate impact and formally address it first thing Monday.",
        effects: { burnout: 10, cleanCode: 10 },
      },
    ],
  },
  {
    id: "stable-stack",
    prompt: "Your tech lead proposes sticking with a stable, proven tech stack.",
    options: [
      {
        id: "trend-chaser",
        label: "Push for adopting a framework that launched this morning.",
        effects: { chaos: 20, ego: 15 },
      },
      {
        id: "evaluate-properly",
        label: "Request a technical comparison before making a decision.",
        effects: { cleanCode: 15 },
      },
      {
        id: "secret-rewrite",
        label: "Agree publicly, prototype something else privately.",
        effects: { chaos: 15, ego: 10 },
      },
      {
        id: "accept-tradeoffs",
        label: "Accept the trade-offs and focus on delivery quality.",
        effects: { cleanCode: 20, burnout: 5 },
      },
    ],
  },
  {
    id: "browser-tabs",
    prompt: "How many browser tabs are currently open?",
    options: [
      {
        id: "minimalist",
        label: "Under 10. Context switching is expensive.",
        effects: { cleanCode: 20 },
      },
      {
        id: "balanced",
        label: "Between 10 and 40. Organized chaos.",
        effects: { burnout: 10 },
      },
      {
        id: "overloaded",
        label: "More than 80. Research never ends.",
        effects: { chaos: 15, burnout: 15 },
      },
      {
        id: "session-restore",
        label: "Enough that session restore is part of my workflow.",
        effects: { chaos: 20 },
      },
    ],
  },
  {
    id: "testing-philosophy",
    prompt: "What’s your philosophy on automated testing?",
    options: [
      {
        id: "test-driven",
        label: "Tests first. Features second.",
        effects: { cleanCode: 25, burnout: 5 },
      },
      {
        id: "ship-then-test",
        label: "Ship fast, cover edge cases later.",
        effects: { chaos: 20 },
      },
      {
        id: "minimal-tests",
        label: "Critical paths only. Balance matters.",
        effects: { cleanCode: 15 },
      },
      {
        id: "ai-generates",
        label: "Let AI generate the test suite.",
        effects: { aiDependency: 20 },
      },
    ],
  },
  {
    id: "code-review",
    prompt: "A junior developer requests a code review.",
    options: [
      {
        id: "deep-review",
        label: "Provide detailed feedback with explanations and references.",
        effects: { cleanCode: 20 },
      },
      {
        id: "surface-level",
        label: "Approve quickly to keep velocity high.",
        effects: { chaos: 15 },
      },
      {
        id: "overengineer-feedback",
        label: "Suggest architectural refactors beyond the PR scope.",
        effects: { ego: 15, burnout: 5 },
      },
      {
        id: "ai-review",
        label: "Run it through an AI reviewer and forward the summary.",
        effects: { aiDependency: 20 },
      },
    ],
  },
  {
    id: "sprint-fuel",
    prompt: "During a high-pressure sprint, your fuel source is:",
    options: [
      {
        id: "structured-routine",
        label: "Balanced meals and proper breaks.",
        effects: { cleanCode: 15 },
      },
      {
        id: "caffeine-loop",
        label: "Caffeine and determination.",
        effects: { burnout: 20 },
      },
      {
        id: "snack-based",
        label: "Whatever is within arm’s reach.",
        effects: { chaos: 10 },
      },
      {
        id: "ai-sustained",
        label: "AI copilots and adrenaline.",
        effects: { aiDependency: 20 },
      },
    ],
  },
  {
    id: "documentation",
    prompt: "How do you approach documentation?",
    options: [
      {
        id: "living-docs",
        label: "Maintain concise, updated documentation alongside code.",
        effects: { cleanCode: 20 },
      },
      {
        id: "code-speaks",
        label: "Self-documenting code should be enough.",
        effects: { ego: 10, chaos: 10 },
      },
      {
        id: "auto-generated",
        label: "Generate docs automatically and refine if needed.",
        effects: { aiDependency: 15 },
      },
      {
        id: "later-task",
        label: "Add documentation as a backlog item.",
        effects: { burnout: 10 },
      },
    ],
  },
  {
    id: "legacy-system",
    prompt: "You inherit a legacy codebase.",
    options: [
      {
        id: "gradual-refactor",
        label: "Refactor incrementally with strong regression tests.",
        effects: { cleanCode: 20 },
      },
      {
        id: "full-rewrite",
        label: "Plan a full rewrite with modern tooling.",
        effects: { ego: 20, chaos: 10 },
      },
      {
        id: "stabilize-first",
        label: "Stabilize, document, then optimize carefully.",
        effects: { cleanCode: 15 },
      },
      {
        id: "ai-migrate",
        label: "Attempt automated migration with AI assistance.",
        effects: { aiDependency: 20 },
      },
    ],
  },
  {
    id: "internet-down",
    prompt: "Your internet connection drops mid-task.",
    options: [
      {
        id: "offline-mode",
        label: "Continue working locally from memory.",
        effects: { cleanCode: 15, ego: 10 },
      },
      {
        id: "blocked",
        label: "Pause until connectivity returns.",
        effects: { burnout: 15 },
      },
      {
        id: "documentation-time",
        label: "Use the time to refine docs or architecture notes.",
        effects: { cleanCode: 15 },
      },
      {
        id: "lost-without-ai",
        label: "Realize how much you rely on online tools.",
        effects: { aiDependency: 20 },
      },
    ],
  },
  {
    id: "career-vision",
    prompt: "Where do you see your engineering career in 10 years?",
    options: [
      {
        id: "technical-expert",
        label: "Deep domain expert solving complex system problems.",
        effects: { cleanCode: 20 },
      },
      {
        id: "engineering-lead",
        label: "Leading teams and shaping technical strategy.",
        effects: { ego: 15 },
      },
      {
        id: "ai-augmented",
        label: "Operating at scale with heavy AI augmentation.",
        effects: { aiDependency: 20 },
      },
      {
        id: "independent-builder",
        label: "Building and shipping independent products.",
        effects: { chaos: 10, ego: 10 },
      },
    ],
  },
];
