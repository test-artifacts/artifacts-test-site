const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './script.js',
    output: {
        filename: 'bundle.js', // Bundled file name
        path: path.resolve(__dirname, 'bundle'), // Output directory
    },
    resolve: {
        alias: {
            'test-artifacts': path.resolve(__dirname, 'node_modules/test-artifacts/src'),
        },
    },
    mode: 'production',
};