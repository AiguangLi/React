# react 按钮事件绑定

## 最简单的方式：在组件里使用 onClick 属性绑定实例方法

注意，在 JSX 中的属性都是驼峰写法，而 html 是全部小写的。

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={this.buttonClick}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick() {
        alert('按钮点击了')
    }
```

## 使用箭头函数，这种方式的好处是可以进行参数传递

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={() => { this.buttonClick('hello') }}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick(msg) {
        alert('按钮点击了, msg: ' + msg)
    }
```

## 推荐写法：实例方法使用箭头函数，并赋给实例属性

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={() => {this.buttonClick('Hello React')}}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick = (msg) => {
        console.log(this)  //this指向组件本身
        alert('按钮点击了, msg: ' + msg)
    }
```

## 扩展知识

具名函数和箭头函数的区别在于，具名函数的 this 指针指向调用者本身，而箭头函数的 this 指向箭头函数外的上下文。例如

```js
const button = document.getElementById('btn');
button.onclick = function () {
	console.log(this); //指向button
	this.style.background = 'red';

	setTimeout(function () {
		console.log(this); //指向调用者Window
	}, 2000);
};

button.onmouseup = () => {
	console.log('mouse up!');
	console.log(this); //因是箭头函数，this指向Window
};
```

## 插件工具

### Simple React Snippets

从扩展中安装插件即可，可以快速补全 React 相关代码模板

### prettier

代码美化工具，设置保存自动格式化就会美化，配置如下：

```json
{
	"workbench.iconTheme": "vscode-icons",
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[less]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	/*  prettier的配置 */
	"prettier.printWidth": 100, // 超过最大值换行
	"prettier.tabWidth": 4, // 缩进字节数
	"prettier.useTabs": true, // 缩进使用tab，使用空格
	"prettier.semi": true, // 句尾添加分号
	"prettier.singleQuote": true, // 使用单引号代替双引号
	"prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	"prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
	"prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	"prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
	"prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
	"prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
	"prettier.htmlWhitespaceSensitivity": "ignore",
	"prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
	"prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
	"prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
	"prettier.parser": "babylon", // 格式化的解析器，默认是babylon
	"prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
	"prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
	"prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
	"prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
	"editor.suggestSelection": "first",
	"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
	"editor.formatOnSave": true
}
```
