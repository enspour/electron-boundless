import { IpcRendererEvent } from "electron";

import { DecksRepository } from "@global/types";

export interface App {
    quit: () => Promise<void>;
    maximize: () => Promise<void>;
    unMaximize: () => Promise<void>;
    minimize: () => Promise<void>;
}

export type IpcListener = (ev: IpcRendererEvent, ...args: any[]) => void;

export interface IpcRenderer {
    on: (channel: string, listener: IpcListener) => void;
    off: (channel: string, listener: IpcListener) => void;
}

declare global {
    interface Window {
        app: App;
        ipcRenderer: IpcRenderer;
        decksStorage: DecksRepository;
    }
}
