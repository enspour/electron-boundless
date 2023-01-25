import { Service, Destroyer, Services } from ".";

export type HamburgerMenuName = "main" | "exercises" | "deck";

export default class HamburgerService implements Service {
    private undoHistory;

    private current: HamburgerMenuName;
    private locations: Record<HamburgerMenuName, string>;

    constructor({ undoHistory }: Services) {
        this.undoHistory = undoHistory;

        this.current = "main";
        this.locations = {
            main: "/",
            exercises: "/exercises/cards",
            deck: "",
        };
    }

    initialize(): Destroyer {
        this.undoHistory.register({
            name: "hamburger-next-menu",
            execute: (menu: HamburgerMenuName) => (this.current = menu),
            undo: (menu: HamburgerMenuName) => (this.current = menu),
        });

        this.undoHistory.register({
            name: "hamburger-prev-menu",
            execute: (menu: HamburgerMenuName) => (this.current = menu),
            undo: (menu: HamburgerMenuName) => (this.current = menu),
        });

        return () => {};
    }

    setPage(to: string) {
        this.locations[this.current] = to;

        this.undoHistory.push("hamburger-navigate", {
            redo: [to],
            undo: [],
        });
    }

    openPage(to: string) {
        this.locations[this.current] = to;

        this.undoHistory.execute("hamburger-navigate", {
            redo: [to],
            undo: [],
        });
    }

    openNextMenu(name: HamburgerMenuName, to?: string) {
        if (this.current === name) {
            if (to && this.locations[name] !== to) {
                this.openPage(to);
            }

            return;
        }

        if (to) {
            this.locations[name] = to;
        }

        this.undoHistory.execute("hamburger-next-menu", {
            redo: [name, this.locations[name]],
            undo: [this.current],
        });
    }

    openPrevMenu(name: HamburgerMenuName, to?: string) {
        if (this.current === name) {
            if (to && this.locations[name] !== to) {
                this.openPage(to);
            }

            return;
        }

        if (to) {
            this.locations[name] = to;
        }

        this.undoHistory.execute("hamburger-prev-menu", {
            redo: [name, this.locations[name]],
            undo: [this.current],
        });
    }

    openBackMenu(name: HamburgerMenuName) {
        this.openPrevMenu(name);
    }
}
