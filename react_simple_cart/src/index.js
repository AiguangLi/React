import React from 'react';
import ReactDOM from 'react-dom';

import Cart from '@/components/cart';

// 使用ReactDOM将元素渲染到页面上，需要使用document.getElementById()获取容器节点
ReactDOM.render(<Cart></Cart>, document.getElementById('app'));
