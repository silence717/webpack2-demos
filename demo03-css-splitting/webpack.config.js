/**
 * @author  https://github.com/silence717
 * @date on 2016/12/20
 */
/**
 * loader
 *		test：匹配loaders处理的文件的拓展名的正则表达式（必须）
 *		loader：loader的名称（必须），loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 css-loader。
 *		include：必须处理的文件（文件夹）（可选）
 *		exclude: 屏蔽不需要处理的文件（文件夹）（可选）
 *		query：为loaders提供额外的设置选项（可选)
 *
 * 其中对css的处理我们需要两个loader，两者组合在一起可以将样式表嵌入打包后的js文件中
 * css-loader 实现读取css的功能
 * style-loader 将样式插入到html页面中
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports =  {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract({
				loader: 'css-loader?sourceMap'
			})
		}]
	},
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
	]
};