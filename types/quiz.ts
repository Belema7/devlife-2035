export type Scores = {
    chaosScore: number;
    aiDependencyScore: number;
    burnoutScore: number;
    cleanCodeScore: number;
    egoScore: number;
};

export type Option = {
    text: string;
    scoreModifier: Partial<Scores>;
};

export type Question = {
    id: number;
    text: string;
    options: Option[];
};

export type Archetype = {
    id: string;
    title: string;
    shortDescription: string;
    primaryRoast: string;
    secondaryRoast: string;
};

export type QuizResult = {
    archetype: string;
    chaos: number;
    aiDependency: number;
    burnout: number;
    cleanCode: number;
    ego: number;
};
