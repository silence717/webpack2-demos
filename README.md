# webpack2-demos
## Getting Started
webpack在你的应用中是一个模块打包工具。webpack可以简化工作流，快速构建一个应用程序的依赖关系图，按照它们正确的顺序绑定。webpack可以配置定制优化你的代码，拆分vendor/css/js代码用于生产环境，运行一个可以及时部署代码并且页面无刷新的开发服务器，还有许多很酷的功能。
###  安装webpack
开始之前首先你得在本地安装一个新版的nodejs。这是一个比较好的基础。老版本你可能会遇到各种与webpack相关的功能丢失或者缺少一些依赖的包。
#### 全局安装
```bash
npm install webpack -g
```
安装成功之后，现在`webpack`命令就在全局生效。  
然而，这不是一个最佳实践，因为它会锁定到一个特定版本的webpack,你在项目中使用不同版本的可能会失效。
#### 本地安装
```bash
npm install webpack --save-dev
npm install webpack@<version> --save-dev
```
这是一种比较推荐的方法。
**如果你想运行本地安装的webpack,你可以进入它的bin里面，就像这样 node_modules/.bin/webpack**

#### 极端的方式
如果你对使用最新的webpack有极大的热情(注意 - 可能是不稳定的)，你可以直接安装webpack库使用。
```bash
npm install webpack/webpack#<tagname/branchname>
```
### Creating a bundle
创建一个demo目录去实践webpack.
```bash
mkdir webpack2-demo && cd webpack2-demo
mkdir demo01-getting-started && cd demo01-getting-started
npm init -y
npm install --save-dev webpack
npm install --save lodash
```
现在我们创建一个`index.js`文件  
**getting-started/src/index.js**
```js
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello','webpack'], function(item){
    return item + ' ';
  });

  return element;
}

document.body.appendChild(component());
```
为了运行这段代码，我们创建一个一个html
**index.html**
```html
<html>
  <head>
    <title>Webpack demo</title>
    <script src="https://unpkg.com/lodash@4.16.6" type="text/javascript"></script>
  </head>
  <body>
    <script src="app/index.js" type="text/javascript"></script>
  </body>
</html>
```
在这栗子中，使用 script 标签引入依赖。
`index.js`依赖`lodash`，所以最最开始引入它。这个里面并没有很直接的表明index.js依赖lodash库，只是使用了lodash的变量 `_`。

这种管理javascript项目会存在一些问题：
* 如果一个依赖丢失，或者没有按照正确的顺序去引入，应用将不会工作。
* 如果一个依赖被引入了，但是从未使用，浏览器就需要加载根本不需要的大段代码。

为了将lodash依赖关系与index.js捆绑到一起，我们需要导入lodash。
```js
+ import _ from 'lodash';

function component () {
  ...
```
同样我们需要改变index.html文件只包含一个bundlejs文件。
```html
<html>
  <head>
    <title>Webpack demo</title>
-   <script src="https://unpkg.com/lodash@4.16.6" type="text/javascript"></script>
-   <script src="app/index.js" type="text/javascript"></script>
  </head>
  <body>
+   <script src="dist/bundle.js" type="text/javascript"></script>
  </body>
</html>
```
现在index.js明确表明依赖lodash，并且将其绑定到_，再也不会产生全局命名污染。

执行webpack命令，入口文件为index.js，输出bundle.js文件，其中未使用的依赖关系不会打入bundle.js中。
```bash
webpack src/index.js dist/bundle.js
// 输出
Hash: 73259977daef4d7ca66c
Version: webpack 2.1.0-beta.28
Time: 558ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 371 bytes {0} [built]

```

### 用一个配置文件来使用webpack
**webpack.config.js**
```js
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: './dist'
	}
};
```
使用webpack运行这个文件：
```js
webpack --config webpack.config.js
// 输出
Hash: 54fb380c0318be007543
Version: webpack 2.1.0-beta.28
Time: 562ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  543 kB       0  [emitted]  [big]  main
   [3] ./src/index.js 371 bytes {0} [built]

```
**如果webpack.config.js已经存在，`webpack`命令会默认选择它**
配置文件能够灵活使用webpack,添加loaders,插件，解析选项和许多其他增强功能。

### 在npm中使用Webpack
我们在package.json中设置一个快捷方式，运行webpack。
```js
...
"scripts": {
    "build": "webpack"
  }
...  
```
现在我们直接运行`npm run build`命令实现与上面相同的功能。
### 总结
在这个栗子中，我们了解了webpack的基本概念和配置，之后我们将按照API进一步深入学习Webpack。

PS：本文完全属于边实践学习边写，会不断更新，希望不对的地方可以及时指出。
