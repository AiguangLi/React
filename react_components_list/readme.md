# react 实例 3：完整列表

## lodash 是一个工具库

中文官网：[lodash 中文网](https://www.lodashjs.com)
Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：

-   遍历 array、object 和 string
-   对值进行操作和检测
-   创建符合功能的函数

```shell
cnpm i lodash@4 -S
```

## listGroup 组件的通用性

listGroup 可以用于很多场景，但是传入的参数可能各不相同，因此可以指定需要的值和文本字段（而不是固定为 id 和 name），这样通用性会更强。

```jsx
const ListGroup = props => {
	const { items, currentValue, textProperty, valueProperty, onItemSelected } = props;
	return (
		<ul className="list-group">
			{items.map(item => {
				return (
					<li
						className={
							'list-group-item' +
							(item[valueProperty] === currentValue ? ' active' : '')
						}
						key={item[valueProperty]}
						onClick={() => onItemSelected(item)}
					>
						{item[textProperty]}
					</li>
				);
			})}
		</ul>
	);
};

export default ListGroup;
```

## 默认 props 减少默认参数的传递

listGroup 组件的`valueProperty`和`textProperty`大部分时间都是对应`id`和`name`，因此可以使用组件的`defaultProps`属性设置默认的 props。

```js
ListGroup.defaultProps = {
	valueProperty: 'id',
	textProperty: 'name',
};
```

## 使用 prop-types 可以校验 props 参数的合法性

文档：(https://www.npmjs.com/package/prop-types)[https://www.npmjs.com/package/prop-types]

```shell
cnpm i prop-types -S
```

支持`number`, `string`, `func`, `array`, `element`等等校验，以及是否必传。

```js
ListGroup.propTypes = {
	items: PropTypes.array.isRequired,
	currentValue: PropTypes.any.isRequired,
	onItemSelected: PropTypes.func.isRequired,
};
```

## 组件通用的功能应该封装在组件内，例如 table 中的排序，应当由组件准备排序数据，然后由上层组件使用。
