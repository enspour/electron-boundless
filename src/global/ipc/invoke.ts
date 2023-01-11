import { ipcRenderer } from "electron";

import { Channels, Args, Returns } from "./channels";

const invoke = async <T extends Channels>(
    channel: T,
    args: Args[T]
): Promise<Returns[T]> => {
    return await ipcRenderer.invoke(channel, args);
};

export default invoke;
