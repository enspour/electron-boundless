export const DeckLevels = [
    { id: 1, name: "Beginners" },
    { id: 2, name: "Pre-intermediate" },
    { id: 3, name: "Intermediate" },
    { id: 4, name: "Upper-intermediate" },
    { id: 5, name: "Advanced" },
    { id: 6, name: "Mastery" },
] as const;

export type DeckLevel = typeof DeckLevels[number]["name"];
