# react 实例 1：商品列表和模拟购物车

## 组件的组合

组件之中可以包含其他组件，由各个组件组成一个更大的组件，例如购物车可能包括商品清单，商品增减、删除操作。
在组件中可以直接使用其他组件作为子组件，并可以向子组件传数据。同时也可以给子组件传递其他 React 元素或组件作为子组件的下级组件。例如：

```jsx
<div>
	<Counter {...this.state.goods}>
		<h3>商品清单</h3>
	</Counter>
</div>
```

## 子组件的类型

子组件的类型包括类组件和函数组件，类组件由于有状态和生命周期，适合需要自己管理数据的场景，但占用资源也高；
函数组件没有状态，因此可以适用于只只负责渲染界面，没有维护数据变更的场景（由父组件控制）。函数组件占用资源相对较低。

## 子组件与父组件通信

父组件可以通过 props 传值给子组件，如果子组件需要修改父组件的数据，应当从父组件传函数，当事件触发时，子组件调用父组件的函数进行处理。
例如在购物车商品列表中，每一行会有一个删除按钮，删除时需要从购物车移出。购物车是商品列表的父组件，则实现方式如下：

```jsx
render() {
//父组件：传递this.handleDelete方法给子组件做删除操作
 return <Tables goods={this.state.goods} handleDelete={this.handleDelete}></Tables>
}

handleDelete = goodsId => {
	let newGoods = this.state.goods.filter(item => item.id !== goodsId);
	this.setState({
		goods: newGoods,
	});
};
```

```jsx
render() {
	//...列表其他部分
	<tr key={item.id}>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.category}</td>
		<td>￥{item.price}</td>
		<td>
			<button className="btn btn-sm btn-danger"
			onClick={() => {props.handleDelete(item.id);}}>删除</button>
		</td>
	</tr>
	//...
}
```

### 受控组件（Controlled Component）

受控组件即自身并没有状态，所有数据均受父组件的控制，这是为了保持父子组件的数据一致性。例如父组件传递给子组件的初始值是 4，如果子组件使用状态维护这个值，则当父组件中的值改变时，子组件的并不会随之改变，这样会导致父子组件的状态不一致。（例如购物车，可能父组件的商品数量和商品清单的数量不一致。）因此此时需要将子组件修改为受控组件，即移除其中的 state，这类组件称之为**受控组件**

## 问题

在 React 17 版本中，如果父组件使用 props 传递了参数给类组件，则子组件中的 constructor 方法需要使用带参数的构造函数，构造函数的参数名为 props。以便整个组件可以访问 props。

```js
constructor(props) {
	super(props);

	this.state = { counter: this.props.counter };
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
	"prettier.parser": "babel", // 格式化的解析器，默认是babel
	"prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
	"prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
	"prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
	"prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
	"editor.suggestSelection": "first",
	"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
	"editor.formatOnSave": true
}
```

## bootstrap 安装 4.5.0

bootstrap 可以更新到 4.5.0，以便使用其中的案例实现界面。

```shell
cnpm i bootstrap@4.5.7 -S
```
