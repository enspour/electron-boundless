import { app } from "electron";

import services from "@main-services";

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    services.initialize();
});
