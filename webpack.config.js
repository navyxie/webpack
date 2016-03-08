var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var PROD = JSON.parse(process.env.PROD_ENV || '0');
module.exports = {
    entry: {
        bundle:"./entry.js",
        bundle2:"./entry2.js"
    },
    devtool: PROD ? "source-map" : "",
    output: {
        //path: __dirname,
        path:'./dist',
        filename: PROD ? "[name].min.js" : "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: PROD ? [new webpack.optimize.UglifyJsPlugin({minimize: true}),commonsPlugin] : [commonsPlugin]
};