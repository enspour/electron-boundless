import DecksService from "./Decks.service";
import EventEmitterService from "./EventEmitter.service";
import HamburgerService from "./Hamburger.service";
import ThemeService from "./Theme.service";
import UndoHistoryService from "./UndoHistory.service";
import WindowService from "./Window.service";

export type Destroyer = () => void;

export interface Service {
    initialize(): Destroyer;
}

function instanceOfService(object: any): object is Service {
    return "initialize" in object;
}

export class Services {
    public EventEmitterCreator;

    public window;
    public undoHistory;
    public theme;
    public decks;
    public hamburger;

    constructor() {
        this.EventEmitterCreator = () => new EventEmitterService();

        this.window = new WindowService();
        this.undoHistory = new UndoHistoryService();
        this.theme = new ThemeService();
        this.decks = new DecksService();
        this.hamburger = new HamburgerService(this);
    }

    initialize(): Destroyer {
        const destroyers: Destroyer[] = [];

        for (const key in this) {
            const service = this[key];

            if (instanceOfService(service)) {
                destroyers.push(service.initialize());
            }
        }

        return () => {
            destroyers.forEach((destroyer) => destroyer());
        };
    }
}

export default new Services();
