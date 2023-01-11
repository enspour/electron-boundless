import { nanoid } from "nanoid";

import { Store, Paths } from "@main-utils";

import { DecksRepository, Deck, Word } from "@global/types";

class DecksStore implements DecksRepository {
    async findAll(): Promise<Deck[]> {
        await this.createDecksFolder();

        const decksPath = Paths.getDecksFolderPath();
        const ids = await Store.readdir(decksPath);

        return await Promise.all(ids.map(async (id) => await this.findOne(id)));
    }

    async findOne(id: string): Promise<Deck> {
        const infoPath = Paths.getDeckInfoFilePath(id);
        return await Store.read<Deck>(infoPath);
    }

    async findWords(id: string): Promise<Word[]> {
        const wordsPath = Paths.getDeckWordsFilePath(id);
        return await Store.read<Word[]>(wordsPath);
    }

    async createOne(deck: Omit<Deck, "id">): Promise<Deck> {
        await this.createDecksFolder();

        const id = nanoid();

        try {
            const modified = { id, ...deck };

            const deckPath = Paths.getDeckFolderPath(id);
            await Store.mkdir(deckPath);

            const infoPath = Paths.getDeckInfoFilePath(id);
            await Store.write(infoPath, modified);

            const wordsPath = Paths.getDeckWordsFilePath(id);
            await Store.write(wordsPath, []);

            return modified;
        } catch (err) {
            const deckPath = Paths.getDeckFolderPath(id);
            await Store.readdir(deckPath);

            throw err;
        }
    }

    async appendWord(deckId: string, word: Omit<Word, "id">): Promise<Word> {
        const id = nanoid();

        const modified = { id, ...word };

        const words = await this.findWords(deckId);
        words.push(modified);

        await this.saveWords(deckId, words);

        return modified;
    }

    async removeOne(id: string): Promise<Deck> {
        const deck = await this.findOne(id);

        const deckPath = Paths.getDeckFolderPath(id);
        await Store.rmdir(deckPath);

        return deck;
    }

    async removeWord(deckId: string, id: string): Promise<Word> {
        const words = await this.findWords(deckId);

        const wordIndex = words.findIndex((item) => item.id === id);
        if (wordIndex !== -1) {
            const [word] = words.splice(wordIndex, 1);

            await this.saveWords(deckId, words);

            return word;
        }

        throw new Error("Oops, word is not found.");
    }

    async updateOne(
        id: string,
        deck: Partial<Omit<Deck, "id">>
    ): Promise<Deck> {
        const infoPath = Paths.getDeckInfoFilePath(id);

        const saved = await this.findOne(id);

        const modified = { ...saved, ...deck };

        await Store.write(infoPath, modified);

        return modified;
    }

    async updateWord(
        deckId: string,
        id: string,
        word: Partial<Omit<Word, "id">>
    ): Promise<Word> {
        const words = await this.findWords(deckId);

        const wordIndex = words.findIndex((item) => item.id === id);
        if (wordIndex !== -1) {
            words[wordIndex] = { ...words[wordIndex], ...word };

            await this.saveWords(deckId, words);

            return words[wordIndex];
        }

        throw new Error("Oops, word is not found.");
    }

    private async saveWords(deckId: string, words: Word[]) {
        const wordsPath = Paths.getDeckWordsFilePath(deckId);
        await Store.write(wordsPath, words);
    }

    private async createDecksFolder() {
        const folderPath = Paths.getDecksFolderPath();

        const isExist = await Store.isDirectory(folderPath);
        if (!isExist) {
            Store.mkdir(folderPath);
        }
    }
}

export default new DecksStore();
