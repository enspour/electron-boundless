import { Service, Destroyer, Services } from ".";

export type HamburgerMenuName = "main" | "exercises" | "deck";

export default class HamburgerService implements Service {
    private current: HamburgerMenuName;
    private locations: Record<HamburgerMenuName, string>;

    private undoHistory;

    constructor({ undoHistory }: Services) {
        this.undoHistory = undoHistory;

        this.current = "main";
        this.locations = {
            main: "/",
            exercises: "/exercises/quiz",
            deck: "/decks/",
        };
    }

    initialize(): Destroyer {
        return () => {};
    }

    pushNavigate(to: string) {
        this.undoHistory.push("hamburger-navigate");
        this.locations[this.current] = to;
    }

    goNextMenu(name: HamburgerMenuName, to?: string) {
        if (this.current === name) {
            return;
        }

        if (to) {
            this.locations[name] = to;
        }

        this.undoHistory.execute("hamburger-next-menu", {
            redo: [name, this.locations[name]],
            undo: [this.current],
        });

        this.current = name;
    }

    goPrevMenu(name: HamburgerMenuName, to?: string) {
        if (this.current === name) {
            return;
        }

        if (to) {
            this.locations[name] = to;
        }

        this.undoHistory.execute("hamburger-prev-menu", {
            redo: [name, this.locations[name]],
            undo: [this.current],
        });

        this.current = name;
    }

    goBackMenu(name: HamburgerMenuName) {
        this.undoHistory.execute("hamburger-prev-menu", {
            redo: [name, this.locations[name]],
            undo: [this.current],
        });

        this.current = name;
    }
}
