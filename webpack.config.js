var webpack = require("webpack");
var PROD = JSON.parse(process.env.PROD_ENV || '0');
module.exports = {
    entry: "./entry.js",
    devtool: PROD ? "source-map" : "",
    output: {
        //path: __dirname,
        path:'./dist',
        filename: PROD ? "bundle.min.js" : "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: PROD ? [new webpack.optimize.UglifyJsPlugin({minimize: true})] : []
};