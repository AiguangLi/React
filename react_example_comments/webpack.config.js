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
    ],
    module: { //第三方模块的配置规则
        rules: [ //第三方匹配规则
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}  //exclude，排除node_modules目录
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],  //引入自定义组件时，可以忽略js,jsx或json文件的后缀名
        alias: {
            '@': path.join(__dirname, './src')      //使用@符号替换src目录
        }
    }
}
