import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Tables(props) {
	return props.goods && props.goods.length > 0 ? (
		<div className="container-fluid">
			<p className="m-8">共有{props.goods.length}件商品</p>
			<h3>商品清单</h3>
			<table className="table">
				<thead>
					<tr>
						<th>商品编号</th>
						<th>商品名称</th>
						<th>商品类别</th>
						<th>商品价格</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					{props.goods.map(item => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.category}</td>
								<td>￥{item.price}</td>
								<td>
									<button
										className="btn btn-sm btn-danger"
										onClick={() => {
											props.handleDelete(item.id);
										}}
									>
										删除
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	) : (
		<p className="m-8">商品清单为空</p>
	);
}
