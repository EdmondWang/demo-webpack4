const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new Visualizer({
            filename: './webpack-visualizer-stat.html'
        })
    ]
});