import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import GoodsTable from '@/components/goodsTable';
import ListGroup from '@/components/common/listGroup';
import Search from '@/components/common/search';

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
			onSearchChanged,
			searchKey,
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
					<p className="m-8">
						共有{total}件商品
						<Link to="/goods/add" className="ml-2 btn btn-primary">
							添加商品
						</Link>
					</p>
					<p>
						<Search
							name="name"
							placeholder="搜索商品名称"
							value={searchKey}
							onChange={onSearchChanged}
						/>
					</p>
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
