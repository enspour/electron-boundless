import { Service, Destroyer } from ".";

import { EventArgs, EventHandler } from "./EventEmitter.service";

import { store, windowActions } from "@redux";

export interface WindowSize {
    height: number;
    width: number;
}

export interface ResizeEventArgs extends EventArgs {
    width: number;
    height: number;
}

export type ResizeEventHandler = (args: ResizeEventArgs) => void;

class WindowService implements Service {
    constructor() {}

    initialize(): Destroyer {
        const offResize = this.onResize((size) => {
            store.dispatch(windowActions.setSize(size));
        });

        const offMaximize = this.onMaximize(() => {
            store.dispatch(windowActions.setIsMaximize(true));
        });

        const offUnMaximize = this.onUnMaximize(() => {
            store.dispatch(windowActions.setIsMaximize(false));
        });

        return () => {
            offResize();
            offMaximize();
            offUnMaximize();
        };
    }

    async close() {
        await window.app.quit();
    }

    async maximize() {
        await window.app.maximize();
    }

    async unMaximize() {
        await window.app.unMaximize();
    }

    async minimize() {
        await window.app.minimize();
    }

    private onResize(handler: ResizeEventHandler) {
        const listener = (_: any, args: ResizeEventArgs) => {
            handler(args);
        };

        window.ipcRenderer.on("resize", listener);
        return () => window.ipcRenderer.off("resize", listener);
    }

    private onMaximize(handler: EventHandler) {
        window.ipcRenderer.on("maximize", handler);
        return () => window.ipcRenderer.off("maximize", handler);
    }

    private onUnMaximize(handler: EventHandler) {
        window.ipcRenderer.on("un-maximize", handler);
        return () => window.ipcRenderer.off("un-maximize", handler);
    }
}

export default WindowService;
