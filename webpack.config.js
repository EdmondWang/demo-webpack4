const path = require('path');

module.exports = {
    entry: './public/javascripts/index.js',
    output: {
        path: path.resolve(__dirname, 'public-dist'),
        filename: 'my-bundle.js'
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
    }
};