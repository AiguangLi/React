
# react加载CSS样式表

## 样式表统一写在src的css目录下

和正常的css一样，在JSX引用的时候，需要引入样式表。默认引入的样式是全局的。

```js
import itemCss from '@/css/CommentListItem.css'
```

## webpack本身不支持css打包，需要使用style-loader和css-loader

```shell
cnpm i style-loader css-loader -D
```

在`webpack.config.js`的`rules`中配置文件打包规则，注意多个打包插件使用数组，规则是从右到左使用loader：

```js
rules: [ //第三方匹配规则
    {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},  //exclude，排除node_modules目录
    {test: /\.css$/, use: ['style-loader', 'css-loader']}
]
```
