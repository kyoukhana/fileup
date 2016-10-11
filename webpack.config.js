
var path = require("path");


module.exports = {
    context: path.resolve('resources'),
    entry: [
        './assets/js/app.js'
    ],
    output: {
        path: path.resolve('public/js'),
        publicPath: 'http://www.fileup.com/js/',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel-loader'
        }
    }
}

