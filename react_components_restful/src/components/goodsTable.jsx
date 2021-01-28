import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from '@/components/common/like';
import Pagination from '@/components/common/pagination';
import Table from '@/components/common/table';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class GoodsTable extends Component {
	columns = [
		{ field: 'id', label: '编号', sort: true },
		{ field: 'name', label: '商品名称', sort: true },
		{ field: 'category', label: '类别', sort: true },
		{ field: 'price', label: '价格', sort: true },
		{ field: 'like', label: '收藏', sort: false },
		{ field: 'operation', label: '操作', sort: false },
	];

	goodsFields = [
		{ name: 'id', prefixLabel: '', suffixLabel: '', type: 'field' },
		{
			name: 'name',
			prefixLabel: '',
			suffixLabel: '',
			type: 'operation',
			content: goods => <Link to={'/goods/' + goods.id}>{goods['name']}</Link>,
		},
		{ name: 'category', prefixLabel: '', suffixLabel: '', type: 'field' },
		{ name: 'price', prefixLabel: '￥', suffixLabel: '', type: 'field' },
		{
			name: 'like',
			type: 'operation',
			content: goods => (
				<Like
					liked={goods.liked}
					onToggleLike={() => this.props.onToggleLike(goods)}
				></Like>
			),
		},
		{
			name: 'delete',
			type: 'operation',
			content: goods => (
				<div>
					<Link to={`/goods/edit/${goods.id}`} className="btn btn-sm btn-primary">
						编辑
					</Link>
					<button
						className="ml-2 btn btn-sm btn-danger"
						onClick={() => {
							this.props.handleDelete(goods.id);
						}}
					>
						删除
					</button>
				</div>
			),
		},
	];

	render() {
		const { goods, onPageChanged, currentPage, maxPage, onSort, sortColumn } = this.props;

		return goods && goods.length > 0 ? (
			<div className="container-fluid">
				<h3>商品清单</h3>
				<Table
					onSort={onSort}
					sortColumn={sortColumn}
					columns={this.columns}
					items={goods}
					fields={this.goodsFields}
					keyField={'id'}
				/>
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
