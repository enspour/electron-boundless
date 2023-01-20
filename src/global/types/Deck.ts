import { Resource } from "./Resource";
import { Levels } from "./English";

export interface Deck extends Resource {
    name: string;
    description: string;
    level: Levels;
}
