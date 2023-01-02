import path from "path";

import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
    test: /\.scss$/,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader" },
    ],
});

rules.push({
    test: /\.svg/,
    type: "asset/inline",
});

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    plugins,
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/renderer/components/"),
            "@hooks": path.resolve(__dirname, "src/renderer/hooks/"),
            "@assets": path.resolve(__dirname, "src/renderer/assets/"),
            "@services": path.resolve(__dirname, "src/renderer/services/"),
            "@redux": path.resolve(__dirname, "src/renderer/redux/"),
            "@utils": path.resolve(__dirname, "src/renderer/utils/"),
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".scss"],
    },
};
