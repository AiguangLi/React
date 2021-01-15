const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//创建html-webpack-plugin插件实例
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'), //源文件
	filename: 'index.html', //内存目标文件
});
//向外暴露webpack所需对象

module.exports = {
	mode: 'development',
	plugins: [htmlPlugin],
	devServer: {
		historyApiFallback: true,
	},
	module: {
		//第三方模块的配置规则
		rules: [
			//第三方匹配规则
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, //exclude，排除node_modules目录
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[path][name]-[local]-[hash:5]',
							},
						},
					},
					'sass-loader',
				],
			},
			{ test: /\.jpg|.jpeg|.png|.gif|.bmp$/, use: 'url-loader' }, //使用url-loader打包图片
			{ test: /\.tiff|.woff|.eot|.ttf|.svg$/, use: 'url-loader' }, //使用url-loader打包字体和svg文件
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'], //引入自定义组件时，可以忽略js,jsx或json文件的后缀名
		alias: {
			'@': path.join(__dirname, './src'), //使用@符号替换src目录
		},
	},
};
