/**
 * @author  https://github.com/silence717
 * @date on 2016/12/15
 */
/**
 * 配置输入输出
 * entry: 可以为string或者数组，目前只考虑单个的
 * output:
 * 		fileName -- 指定输出文件的名称
 *  		[name] is replaced by the name of the chunk.

 			[hash] is replaced by the hash of the compilation.

 			[chunkhash] is replaced by the hash of the chunk.
 * 		path -- 输出目录作为一个绝对路径（必需的）。
 */
module.exports  = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	}
};
/**
 * 单个入口还可以采用下面这种快捷方式配置
 */
// module.exports = {
// 	entry: {
// 		main: './index.js'
// 	},
// 	output: {
// 		filename: 'bundle.js'
// 	}
// };