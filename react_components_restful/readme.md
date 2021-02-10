# react 实例 6：Restful 示例 - 使用 axios

## react-toastify 全局提示 toast 组件

react-toastify 是一个全局的 toast 提示弹窗：
[文档](https://fkhadra.github.io/react-toastify/introduction/)

```shell
cnpm i react-toastify -S
```

## sentry 是一个日志框架，可以记录多种开发语言的运行日志，排查问题。支持使用 sentry 平台记录或私有化部署（sentry 平台有免费版和付费版）

sentry 自有平台在国内访问较慢！

[官网](https://sentry.io/)
[github](https://github.com/getsentry/sentry)

```shell
cnpm i --S @sentry/react @sentry/tracing
```

## axios 网络请求库

[中文网址](http://www.axios-js.com)

## JWT 解密库

[npm 网址](https://www.npmjs.com/package/jwt-decode)

调用 jwt_decode(jwt)可以解密 jwt 的 payload 信息。

## ProtectRoute：受保护的路由

[相关文档](https://reactrouter.com/web/api/Redirect/to-object)
受保护的路由在没有登录的时候跳转到登录页面，这是在 Redirect 可以将 to 属性设置为对象。

```jsx
<Redirect
	to={{
		pathname: '/login',
		state: { from: props.location },
	}}
/>
```

从而可以在登录组件成功后可以使用 state 属性的 from 属性返回登录之前的页面。

```js
if (status === 200 || status === 201) {
	authService.saveJwt(data);
	const { state } = this.props.location;
	window.location = state ? state.from.pathname : '/';
}
```
