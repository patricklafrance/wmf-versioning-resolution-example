// ts-check

import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js";
import path from "node:path";
import { createRequire } from "node:module";

// Using node:module.createRequire until
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve
// is available
const require = createRequire(import.meta.url);

/** @type {import("webpack").Configuration} */
export default {
    mode: "production",
    target: "web",
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        // The trailing / is very important, otherwise paths will ne be resolved correctly.
        publicPath: "http://localhost:8080/",
        clean: true
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "swc-loader"
                }
            },
            {
                // https://stackoverflow.com/questions/69427025/programmatic-webpack-jest-esm-cant-resolve-module-without-js-file-exten
                test: /\.js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: require.resolve("style-loader") },
                    {
                        loader: require.resolve("css-loader")
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                remote1: "remote1@http://localhost:8081/remoteEntry.js",
                remote2: "remote2@http://localhost:8082/remoteEntry.js"
            },
            shared: {
                "react": {
                  singleton: true
                },
                "react-dom": {
                  singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};