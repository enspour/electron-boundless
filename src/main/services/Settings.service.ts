import path from "path";
import { app } from "electron";

import { Destroyer, Service } from ".";

export default class SettingsService implements Service {
    private decksFolderPath;

    constructor() {
        this.decksFolderPath = path.normalize(
            path.join(app.getPath("home"), ".boundless", "decks")
        );
    }

    initialize(): Destroyer {
        return () => {};
    }

    get DecksFolderPath() {
        return this.decksFolderPath;
    }

    set DecksFolderPath(path: string) {
        this.decksFolderPath = path;
    }
}
