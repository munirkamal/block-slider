const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const customDirectory = "block/form/";
module.exports = {
    entry: {
        "main.min.js": path.join(__dirname, customDirectory, "main.js"),
        "style.min.css": path.join(__dirname, customDirectory, "style.scss"),
        "editor.min.css": path.join(__dirname, customDirectory, "editor.scss"),
        "editor.min.css": path.join(__dirname, customDirectory, "editor.scss"),
        "main.min.js": path.join(__dirname, customDirectory, "main.js"),
        "front.min.js":path.join(__dirname, customDirectory, "front.js"),
    },
    output: {
        path: path.join(__dirname, customDirectory, "dist"),
        filename: "[name]",
    },
    module: {
        rules: [
            {
                test: /front\.min\.js$/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ['es2015', 'react']
                    // }
                },
                exclude: [path.resolve(__dirname, "node_modules")],
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
                exclude: [path.resolve(__dirname, "node_modules")],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: [path.resolve(__dirname, "node_modules")],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            publicPath: path.join(__dirname, customDirectory, "dist"),
            filename: '[name]',
        }),
    ],
    stats: { children: false, colors: true, reasons: false },
};
