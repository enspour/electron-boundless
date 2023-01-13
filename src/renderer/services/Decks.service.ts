import { Service, Destroyer } from ".";

import { Deck } from "@global/types";

export default class DecksService implements Service {
    constructor() {}

    initialize(): Destroyer {
        return () => {};
    }

    async getAll() {
        return await window.decksRepository.findAll();
    }

    async getOne(id: string) {
        try {
            return await window.decksRepository.findOne(id);
        } catch {
            return null;
        }
    }

    async getWords(id: string) {
        try {
            return await window.decksRepository.findWords(id);
        } catch {
            return null;
        }
    }

    async createOne(deck: Omit<Deck, "id">) {
        return await window.decksRepository.createOne(deck);
    }
}
