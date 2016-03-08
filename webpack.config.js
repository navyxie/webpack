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
            { test: /\.css$/, loader: "style!css" },
            { test: require.resolve("./alert.js"),  loader: "exports?at"}
        ]
    },
    resolve:{
        //查找module的话从这里开始查找
        //root: '', 
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        //extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            CONTENT : './content.js'//后续直接 require('CONTENT') 即可
        }
    },
    plugins: PROD ? plugins.concat([new webpack.optimize.UglifyJsPlugin({minimize: true}),commonsPlugin]) : plugins
};