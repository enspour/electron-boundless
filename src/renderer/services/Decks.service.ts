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

    async createOneDefault() {
        return await this.createOne({
            name: "Unnamed",
            description: "",
            location: "local",
            level: "Beginners",
            modifiedAt: Date.now(),
            createdAt: Date.now(),
        });
    }

    async removeOne(id: string) {
        return await window.decksRepository.removeOne(id);
    }
}
