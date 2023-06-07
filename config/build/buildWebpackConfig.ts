import type webpack from "webpack";
import { buildSevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { type BuildOptions } from "./types/config";

export const buildWebpackConfig = (
    options: BuildOptions,
): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: {
            main: paths.entry,
        },
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths, true),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildSevServer(options) : undefined,
    };
};
