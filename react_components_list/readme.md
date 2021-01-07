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
