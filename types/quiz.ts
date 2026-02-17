export type Trait =
  | "chaos"
  | "aiDependency"
  | "burnout"
  | "cleanCode"
  | "ego";

// Base score structure
export type Scores = Record<Trait, number>;

export type Option = {
  id: string;
  label: string;
  effects: Partial<Scores>;
};

// Each quiz question
export type Question = {
  id: string;
  prompt: string;
  options: Option[];
};

// archetype IDs
export type ArchetypeId =
  | "AI_OVERLORD_DEPENDENT"
  | "LEGACY_MONSTER_MAINTAINER"
  | "FRAMEWORK_HOPPER_3000"
  | "BURNED_OUT_SENIOR"
  | "CLEAN_CODE_ARCHITECT";

// Archetype definition
export type Archetype = {
  id: ArchetypeId;
  title: string;
  shortDescription: string;
};

// Final computed result
export type QuizResult = {
  archetype: ArchetypeId;
  scores: Scores;
};
