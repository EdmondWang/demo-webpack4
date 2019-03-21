const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new Visualizer({
            filename: './webpack-visualizer-stat.html'
        }),
        new BundleAnalyzerPlugin()
    ]
});