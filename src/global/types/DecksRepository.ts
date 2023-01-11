import { Deck } from "./Deck";
import { Word } from "./Word";

export interface DecksRepository {
    findAll(): Promise<Deck[]>;
    findOne(id: string): Promise<Deck>;
    findWords(id: string): Promise<Word[]>;

    createOne(deck: Omit<Deck, "id">): Promise<Deck>;
    appendWord(deckId: string, word: Omit<Word, "id">): Promise<Word>;

    removeOne(id: string): Promise<Deck>;
    removeWord(deckId: string, id: string): Promise<Word>;

    updateOne(id: string, deck: Partial<Omit<Deck, "id">>): Promise<Deck>;
    updateWord(
        deckId: string,
        id: string,
        word: Partial<Omit<Word, "id">>
    ): Promise<Word>;
}
