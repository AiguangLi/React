const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建html-webpack-plugin插件实例
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),  //源文件
    filename: 'index.html'  //内存目标文件
})
//向外暴露webpack所需对象

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ]
}
