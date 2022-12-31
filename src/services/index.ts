import EventEmitterService from "./EventEmitter.service";
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

    constructor() {
        this.EventEmitterCreator = () => new EventEmitterService();

        this.window = new WindowService();
        this.undoHistory = new UndoHistoryService();
        this.theme = new ThemeService();
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
