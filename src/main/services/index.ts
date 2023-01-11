import App from "./App.service";
import SettingsService from "./Settings.service";
import DecksStore from "../store/Decks.store";
import IpcService from "./Ipc.service";

export type Destroyer = () => void;

export interface Service {
    initialize(): Destroyer;
}

function instanceOfService(object: any): object is Service {
    return "initialize" in object;
}

export class Services {
    public app;
    public settings;

    private ipc;

    constructor() {
        this.app = new App();
        this.settings = new SettingsService();

        this.ipc = new IpcService(this);
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
