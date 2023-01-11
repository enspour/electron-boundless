import { Deck, Word } from "@global/types";

export type Channels =
    | "app-quit"
    | "app-maximize"
    | "app-un-maximize"
    | "app-minimize"
    | "decks-storage-find-all"
    | "decks-storage-find-one"
    | "decks-storage-find-words"
    | "decks-storage-create-one"
    | "decks-storage-append-word"
    | "decks-storage-remove-one"
    | "decks-storage-remove-word"
    | "decks-storage-update-one"
    | "decks-storage-update-word";

export interface Args {
    "app-quit": {};
    "app-maximize": {};
    "app-un-maximize": {};
    "app-minimize": {};
    "decks-storage-find-all": {};
    "decks-storage-find-one": { id: string };
    "decks-storage-find-words": { id: string };
    "decks-storage-create-one": { deck: Omit<Deck, "id"> };
    "decks-storage-append-word": { deckId: string; word: Omit<Word, "id"> };
    "decks-storage-remove-one": { id: string };
    "decks-storage-remove-word": { deckId: string; id: string };
    "decks-storage-update-one": { id: string; deck: Partial<Omit<Deck, "id">> };
    "decks-storage-update-word": {
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
    "decks-storage-find-all": Deck[];
    "decks-storage-find-one": Deck;
    "decks-storage-find-words": Word[];
    "decks-storage-create-one": Deck;
    "decks-storage-append-word": Word;
    "decks-storage-remove-one": Deck;
    "decks-storage-remove-word": Word;
    "decks-storage-update-one": Deck;
    "decks-storage-update-word": Word;
}
