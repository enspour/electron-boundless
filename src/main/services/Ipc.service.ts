import { Services, Service, Destroyer } from ".";

import DecksStore from "../store/Decks.store";

import handle from "@ipc/handle";

export default class IpcService implements Service {
    private app;

    constructor({ app }: Services) {
        this.app = app;
    }

    initialize(): Destroyer {
        handle("app-quit", async () => {
            this.app.close();
        });

        handle("app-maximize", async () => {
            this.app.maximize();
        });

        handle("app-un-maximize", async () => {
            this.app.unMaximize();
        });

        handle("app-minimize", async () => {
            this.app.minimize();
        });

        handle("decks-storage-find-all", async () => {
            return await DecksStore.findAll();
        });

        handle("decks-storage-find-one", async ({ id }) => {
            return await DecksStore.findOne(id);
        });

        handle("decks-storage-find-words", async ({ id }) => {
            return await DecksStore.findWords(id);
        });

        handle("decks-storage-create-one", async ({ deck }) => {
            return await DecksStore.createOne(deck);
        });

        handle("decks-storage-append-word", async ({ deckId, word }) => {
            return await DecksStore.appendWord(deckId, word);
        });

        handle("decks-storage-remove-one", async ({ id }) => {
            return await DecksStore.removeOne(id);
        });

        handle("decks-storage-remove-word", async ({ deckId, id }) => {
            return await DecksStore.removeWord(deckId, id);
        });

        handle("decks-storage-update-one", async ({ id, deck }) => {
            return await DecksStore.updateOne(id, deck);
        });

        handle("decks-storage-update-word", async ({ deckId, id, word }) => {
            return await DecksStore.updateWord(deckId, id, word);
        });

        return () => {};
    }
}
