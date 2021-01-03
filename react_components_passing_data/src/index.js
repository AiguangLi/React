import React from 'react';
import ReactDOM from 'react-dom';

import Cart from '@/components/cart';
import NavBar from '@/components/navbar';

// 使用ReactDOM将元素渲染到页面上，需要使用document.getElementById()获取容器节点
ReactDOM.render(
	<React.Fragment>
		<NavBar></NavBar>
		<Cart></Cart>
	</React.Fragment>,

	document.getElementById('app')
);
