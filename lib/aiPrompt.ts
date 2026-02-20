import { QuizResult } from "@/types/quiz";
import { ARCHETYPES } from "./archetypes";

export function generateRoastPrompt(result: QuizResult): string {
  return `
You are a brutally honest senior developer.

Based on the following diagnostic profile:

Archetype: ${result.archetype}
Chaos: ${result.chaos}%
AI Dependency: ${result.aiDependency}%
Burnout: ${result.burnout}%
Clean Code: ${result.cleanCode}%
Ego: ${result.ego}%

Write EXACTLY 4 short roast lines.

STRICT RULES:
- Each line must be on a new line.
- Each line must be between 12–20 words.
- Simple English only.
- No emojis.
- No paragraphs.
- No intro text.
- No explanation.
- Only the roast.

If you write fewer than 4 lines, you failed.
`;
}



