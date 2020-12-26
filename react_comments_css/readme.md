
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

## 样式模块化

如果需要避免引入一个css文件对全局样式有影响，就需要启用样式模块化，此时需要在css-loader中加上模块化参数。

### 方式一

在css-loader上加参数：

```js
rules: [ //第三方匹配规则
    {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},  //exclude，排除node_modules目录
    {test: /\.css$/, use: ['style-loader', 'css-loader?modules']}
]
```

但如果要携带其他参数，则需要使用options配置（旧版本的支持拼接参数），如下所示：

```js
{
    test: /\.css$/, use: ['style-loader', {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[path][name]-[local]-[hash:5]'
            }
        }
    }
}
```

- 其中path对应是css文件路径，以-结尾
- name是样式文件名称
- local表示本地样式名称
- hash:5是用5位hash防止出现同名情况

得到的样式对象为：

```js
{
    box: "src-css-CommentListItem-box-8660e"
    content: "src-css-CommentListItem-content-29749"
    nickname: "src-css-CommentListItem-nickname-91320"
}

```

模块化后，需要使用内嵌js对象的方式应用样式，如下所示：

```jsx
return <div className={itemCss.box}>
        <h1 className={itemCss.nickname}>{props.nickname}</h1>
        <p className={itemCss.content}> {props.content}</p>
    </div>
```

该方式只对class和id样式有效，如果需要把class或id用成全局的，则需要使用:global()函数，如下所示：

```css
:global(.title): {
}
```
