import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import GoodsTable from '@/components/goodsTable';
import ListGroup from '@/components/common/listGroup';

export default class Cart extends Component {
	render() {
		const {
			goods,
			handleDeleteGoods,
			handleToggleLike,
			onPageChanged,
			currentPage,
			maxPage,
			total,
			categories,
			currentCategoryId,
			onCategoryChanged,
			onSort,
			sortColumn,
		} = this.props;
		return (
			<div className="row m-4">
				<div className="col-3">
					<ListGroup
						items={categories}
						currentValue={currentCategoryId}
						onItemSelected={onCategoryChanged}
					/>
				</div>
				<div className="col">
					<p className="m-8">共有{total}件商品</p>
					<GoodsTable
						goods={goods}
						handleDelete={handleDeleteGoods}
						onToggleLike={handleToggleLike}
						onPageChanged={onPageChanged}
						currentPage={currentPage}
						maxPage={maxPage}
						onSort={onSort}
						sortColumn={sortColumn}
					></GoodsTable>
				</div>
			</div>
		);
	}
}
