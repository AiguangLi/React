# react 实例 7：高级特性

## 高阶组件

高阶组件用于将一个组件进行包裹（增加通用特性，如 tooltip）返回，以提高复用性。

## useState

在函数组件中使用 useState 勾子函数可以实现函数组件也有状态，从而简化类组件那种繁琐的写法。

```js
const [count, setCount] = useState(0);
```

## useEffect

useEffect 勾子函数能够在组件加载完成或卸载后指定回调方法，并可以指定依赖对象。第一个参数为一个函数，制定组件加载后执行的方法，可以在该方法内返回另一个
方法，该返回的方法会在组件卸载时调用。第二个参数为依赖对象。若指定了依赖对象，则对象发生改变的时候会再次调用第一个参数的方法。

```js
useEffect(() => {
	setTimeout(() => {
		setLoading(false);
	}, 1000);

	return () => {
		console.log('Clean up!');
	};
}, []);
```
