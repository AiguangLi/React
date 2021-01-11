import React, { Component } from 'react';
import Like from '@/components/common/like';
import Pagination from '@/components/common/pagination';
import TableHeader from '@/components/common/tableHeader';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class GoodsTable extends Component {
	columns = [
		{ field: 'id', label: '编号' },
		{ field: 'name', label: '商品名称' },
		{ field: 'category', label: '类别' },
		{ field: 'price', label: '价格' },
		{ label: '收藏' },
		{ label: '操作' },
	];

	render() {
		const {
			goods,
			handleDelete,
			onToggleLike,
			onPageChanged,
			currentPage,
			maxPage,
			onSort,
			sortColumn,
		} = this.props;

		return goods && goods.length > 0 ? (
			<div className="container-fluid">
				<h3>商品清单</h3>
				<table className="table">
					<TableHeader onSort={onSort} sortColumn={sortColumn} columns={this.columns} />
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
