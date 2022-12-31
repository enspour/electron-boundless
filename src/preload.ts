// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge, IpcRendererEvent } from "electron";

type Listener = (ev: IpcRendererEvent, ...args: any[]) => void;

contextBridge.exposeInMainWorld("app", {
    quit: () => ipcRenderer.invoke("app-quit"),
    maximize: () => ipcRenderer.invoke("app-maximize"),
    unMaximize: () => ipcRenderer.invoke("app-un-maximize"),
    minimize: () => ipcRenderer.invoke("app-minimize"),
});

contextBridge.exposeInMainWorld("ipcRenderer", {
    on: (channel: string, listener: Listener) => {
        ipcRenderer.on(channel, listener);
    },

    off: (channel: string, listener: Listener) => {
        ipcRenderer.removeListener(channel, listener);
    },
});
