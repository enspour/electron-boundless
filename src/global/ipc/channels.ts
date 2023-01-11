import { Deck, Word } from "@global/types";

export type Channels =
    | "app-quit"
    | "app-maximize"
    | "app-un-maximize"
    | "app-minimize"
    | "decks-store-find-all"
    | "decks-store-find-one"
    | "decks-store-find-words"
    | "decks-store-create-one"
    | "decks-store-append-word"
    | "decks-store-remove-one"
    | "decks-store-remove-word"
    | "decks-store-update-one"
    | "decks-store-update-word";

export interface Args {
    "app-quit": {};
    "app-maximize": {};
    "app-un-maximize": {};
    "app-minimize": {};
    "decks-store-find-all": {};
    "decks-store-find-one": { id: string };
    "decks-store-find-words": { id: string };
    "decks-store-create-one": { deck: Omit<Deck, "id"> };
    "decks-store-append-word": { deckId: string; word: Omit<Word, "id"> };
    "decks-store-remove-one": { id: string };
    "decks-store-remove-word": { deckId: string; id: string };
    "decks-store-update-one": { id: string; deck: Partial<Omit<Deck, "id">> };
    "decks-store-update-word": {
        deckId: string;
        id: string;
        word: Partial<Omit<Word, "id">>;
    };
}

export interface Returns {
    "app-quit": void;
    "app-maximize": void;
    "app-un-maximize": void;
    "app-minimize": void;
    "decks-store-find-all": Deck[];
    "decks-store-find-one": Deck;
    "decks-store-find-words": Word[];
    "decks-store-create-one": Deck;
    "decks-store-append-word": Word;
    "decks-store-remove-one": Deck;
    "decks-store-remove-word": Word;
    "decks-store-update-one": Deck;
    "decks-store-update-word": Word;
}
