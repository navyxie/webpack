var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var PROD = JSON.parse(process.env.PROD_ENV || '0');
var plugins = [commonsPlugin,new CommonsChunkPlugin("admin-commons.js", ["common1", "common2"]), new CommonsChunkPlugin("all-commons.js", ["common3","admin-commons.js"])];
module.exports = {
    entry: {
        bundle:"./entry.js",
        bundle2:"./entry2.js",
        common1:"./common1.js",
        common2:"./common2.js",
        common3:"./common3.js"
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
    plugins: PROD ? plugins.concat([new webpack.optimize.UglifyJsPlugin({minimize: true}),commonsPlugin]) : plugins
};