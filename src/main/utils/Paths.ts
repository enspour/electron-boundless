import path from "path";

import services from "@main-services";

class Paths {
    getDecksFolderPath() {
        return path.normalize(services.settings.DecksFolderPath);
    }

    getDeckFolderPath(id: string) {
        return path.normalize(path.join(services.settings.DecksFolderPath, id));
    }

    getDeckInfoFilePath(id: string) {
        return path.normalize(
            path.join(services.settings.DecksFolderPath, id, "info.json")
        );
    }

    getDeckWordsFilePath(id: string) {
        return path.normalize(
            path.join(services.settings.DecksFolderPath, id, "words.json")
        );
    }
}

export default new Paths();
