import path from "path";

import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";

export const mainConfig: Configuration = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: "./src/main/index.ts",
    // Put your normal webpack config below here
    module: {
        rules,
    },
    resolve: {
        alias: {
            "@global": path.resolve(__dirname, "src/global/"),
            "@declarations": path.resolve(__dirname, "src/declarations/"),
            "@ipc": path.resolve(__dirname, "src/global/ipc/"),

            "@main-services": path.resolve(__dirname, "src/main/services/"),
            "@main-utils": path.resolve(__dirname, "src/main/utils/"),
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    },
};
