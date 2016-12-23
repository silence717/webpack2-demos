/**
 * @author  https://github.com/silence717
 * @date on 2016/12/15
 */
/**
 * entry：多个时候我们可以这样配置
 * output:
 * 		fileName -- 指定输出文件的名称,如果存在多个块，我们使用下面三种方式替换，确保每个文件有个唯一的名称。
 *  		[name] is replaced by the name of the chunk.
 *			[hash] is replaced by the hash of the compilation.
 *			[chunkhash] is replaced by the hash of the chunk.
 */
module.exports = {
	entry: {
		indexOne: './indexOne.js',
		indexTwo: './indexTwo.js'
	},
	output: {
		filename: '[hash].bundle.js',
		path: __dirname + '/'
	}
};