const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        'indexPage': './public/javascripts/pages/index.js',
        'common': './public/javascripts/common.js'
    },
    output: {
        path: path.resolve(__dirname, 'public-dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader' // translate CSS into Common JS
            ]
        }, {
            test: /\.scss/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin()
    ]
};