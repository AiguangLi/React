import React, { Component } from 'react';
import Like from '@/components/common/like';
import Pagination from '@/components/common/pagination';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class GoodsTable extends Component {
	raiseSort = sortField => {
		let sortType = this.props.sortType;
		if (sortField === sortType.field) {
			sortType.direction = sortType.direction === 'asc' ? 'desc' : 'asc';
		} else {
			sortType = { field: sortField, direction: 'asc' };
		}
		this.props.onSort(sortType);
	};

	render() {
		const {
			goods,
			handleDelete,
			onToggleLike,
			onPageChanged,
			currentPage,
			maxPage,
		} = this.props;

		return goods && goods.length > 0 ? (
			<div className="container-fluid">
				<h3>商品清单</h3>
				<table className="table">
					<thead>
						<tr>
							<th onClick={() => this.raiseSort('id')} style={{ cursor: 'pointer' }}>
								商品编号
							</th>
							<th
								onClick={() => this.raiseSort('name')}
								style={{ cursor: 'pointer' }}
							>
								商品名称
							</th>
							<th
								onClick={() => this.raiseSort('category')}
								style={{ cursor: 'pointer' }}
							>
								商品类别
							</th>
							<th
								onClick={() => this.raiseSort('price')}
								style={{ cursor: 'pointer' }}
							>
								商品价格
							</th>
							<th>收藏</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{goods.map(item => {
							return (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.category}</td>
									<td>￥{item.price}</td>
									<td>
										<Like
											liked={item.liked}
											onToggleLike={() => onToggleLike(item)}
										></Like>
									</td>
									<td>
										<button
											className="btn btn-sm btn-danger"
											onClick={() => {
												handleDelete(item.id);
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
				<Pagination
					currentPage={currentPage}
					maxPage={maxPage}
					onPageChanged={onPageChanged}
				></Pagination>
			</div>
		) : (
			<p className="m-8">商品清单为空</p>
		);
	}
}

export default GoodsTable;
