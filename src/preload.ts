// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from "electron";

import invoke from "@ipc/invoke";

import { DecksRepository } from "@global/types";

import { IpcListener } from "@declarations/renderer";

contextBridge.exposeInMainWorld("app", {
    quit: () => invoke("app-quit", {}),
    maximize: () => invoke("app-maximize", {}),
    unMaximize: () => invoke("app-un-maximize", {}),
    minimize: () => invoke("app-minimize", {}),
});

contextBridge.exposeInMainWorld("ipcRenderer", {
    on: (channel: string, listener: IpcListener) => {
        ipcRenderer.on(channel, listener);
    },

    off: (channel: string, listener: IpcListener) => {
        ipcRenderer.removeListener(channel, listener);
    },
});

const decksRepository: DecksRepository = {
    async findAll() {
        return await invoke("decks-store-find-all", {});
    },

    async findOne(id) {
        return await invoke("decks-store-find-one", { id });
    },

    async findWords(id) {
        return await invoke("decks-store-find-words", { id });
    },

    async createOne(deck) {
        return await invoke("decks-store-create-one", { deck });
    },

    async appendWord(deckId, word) {
        return await invoke("decks-store-append-word", {
            deckId,
            word,
        });
    },

    async removeOne(id) {
        return await invoke("decks-store-remove-one", { id });
    },

    async removeWord(deckId, id) {
        return await invoke("decks-store-remove-word", {
            deckId,
            id,
        });
    },

    async updateOne(id, deck) {
        return await invoke("decks-store-update-one", {
            id,
            deck,
        });
    },

    async updateWord(deckId, id, word) {
        return await invoke("decks-store-update-word", {
            deckId,
            id,
            word,
        });
    },
};

contextBridge.exposeInMainWorld("decksRepository", decksRepository);
