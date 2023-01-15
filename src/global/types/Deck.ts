import { Resource } from "./Resource";

export type DeckLevels =
    | "Beginners"
    | "Pre-intermediate"
    | "Intermediate"
    | "Upper-intermediate"
    | "Advanced"
    | "Mastery";

export interface Deck extends Resource {
    name: string;
    description: string;
    level: DeckLevels;
}
