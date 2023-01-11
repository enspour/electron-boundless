import { ipcMain } from "electron";

import { Channels, Args, Returns } from "./channels";

const handle = <T extends Channels>(
    channel: T,
    listener: (args: Args[T]) => Promise<Returns[T]>
): void => {
    ipcMain.handle(channel, (_, args) => listener(args));
};

export default handle;
