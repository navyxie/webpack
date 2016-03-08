var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');//提取公共文件，生成common.js
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//自定义公共文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");//独立打包样式文件,有时候可能希望项目的样式能不要被打包到脚本中，而是独立出来作为.css，然后在页面中以<link>标签引入
var PROD = JSON.parse(process.env.PROD_ENV || '0');
var plugins = [commonsPlugin,new ExtractTextPlugin("[name].css"),new CommonsChunkPlugin("admin-commons.js", ["common1", "common2"]), new CommonsChunkPlugin("all-commons.js", ["common3","admin-commons.js"])];
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
            { test: require.resolve("./alert.js"),  loader: "exports?at"}//在 AMD/CMD 中，我们需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行 shim 处理
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