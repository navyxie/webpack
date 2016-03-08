# webpack demo

[webpack tutorials](https://webpack.github.io/docs/tutorials/getting-started/)

## run demo

- production:PROD_ENV=1 webpack
- dev:webpack


## webpack常用参数

- webpack --display-error-details（方便出错时能查阅更详尽的信息）
- webpack --config XXX.js   （使用另一份配置文件，比如webpack.config2.js来打包）
- webpack --watch   （监听变动并自动打包）
- webpack -p    （压缩混淆脚本，这个非常非常重要！）
- webpack -d    （生成map映射文件，告知哪些模块被最终打包到哪里了）

总结：

- node的版本低于0.12.x时，css-loader版本应低于0.18.x,不然会出现报错：Module build failed: ReferenceError: Promise is not defined


## referrer

- [http://www.cnblogs.com/vajoy/p/4650467.html](http://www.cnblogs.com/vajoy/p/4650467.html)
- [https://webpack.github.io/docs/tutorials/getting-started/](https://webpack.github.io/docs/tutorials/getting-started/)
- [https://segmentfault.com/a/1190000002551952](https://segmentfault.com/a/1190000002551952)
- [http://www.infoq.com/cn/articles/react-and-webpack](http://www.infoq.com/cn/articles/react-and-webpack)
- [http://www.html-js.com/article/2931](http://www.html-js.com/article/2931)