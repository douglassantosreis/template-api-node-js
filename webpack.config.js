const path = require('path');

const { IgnorePlugin, HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
    target: 'node',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'app.ts'),
    output: {
        filename: path.join('.', 'app.js'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    emitErrors: true,
                    failOnHint: true,
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new IgnorePlugin(/^pg-native$/),
        new HotModuleReplacementPlugin()
    ],
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()]
};

module.exports = (_, argv) => {

    if (argv.mode === 'development') {
        config.plugins.push(
            new WebpackShellPlugin(
                {
                    onBuildEnd: ['npm run start:dev']
                }
            )
        );
    }

    return config;
};