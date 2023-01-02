import { IpcRendererEvent } from "electron";

export type Listener = (ev: IpcRendererEvent, ...args: any[]) => void;

export interface App {
    quit: () => Promise<void>;
    maximize: () => Promise<void>;
    unMaximize: () => Promise<void>;
    minimize: () => Promise<void>;
}

export interface IpcRenderer {
    on: (channel: string, listener: Listener) => void;
    off: (channel: string, listener: Listener) => void;
}

declare global {
    interface Window {
        app: App;
        ipcRenderer: IpcRenderer;
    }
}
