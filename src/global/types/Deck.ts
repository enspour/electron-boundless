import { Resource } from "./Resource";

export const DeckLevels = [
    "Beginners",
    "Pre-intermediate",
    "Intermediate",
    "Upper-intermediate",
    "Advanced",
    "Mastery",
] as const;

export type DeckLevel = typeof DeckLevels[number];

export interface Deck extends Resource {
    name: string;
    description: string;
    level: DeckLevel;
}
