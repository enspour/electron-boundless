import { app, BrowserWindow, Menu } from "electron";

import { Service, Destroyer } from ".";

import WindowService from "./Window.service";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    app.quit();
}

export default class App implements Service {
    private window;

    constructor() {
        this.window = new WindowService();
    }

    initialize(): Destroyer {
        let mainWindowDestroyer = this.window.initialize();

        Menu.setApplicationMenu(null);

        app.on("window-all-closed", () => {
            if (process.platform !== "darwin") {
                app.quit();
            }
        });

        app.on("activate", () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                mainWindowDestroyer();

                this.window = new WindowService();
                mainWindowDestroyer = this.window.initialize();
            }
        });

        return () => {
            mainWindowDestroyer();
        };
    }

    close() {
        this.window.close();
    }

    maximize() {
        this.window.maximize();
    }

    unMaximize() {
        this.window.unMaximize();
    }

    minimize() {
        this.window.minimize();
    }
}
