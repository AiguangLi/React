import React, { Component } from 'react';

import { getGoodsByPagination, deleteGoodsById } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';

import Cart from '@/components/cart';

class CartController extends Component {
	constructor() {
		super();

		this.state = {
			goods: [],
			currentPage: 1,
			pageSize: 3,
			maxPage: 0,
			total: 0,
			categories: [],
			currentCategoryId: 0,
			sortColumn: { field: 'id', direction: 'asc' },
		};
	}

	componentDidMount() {
		this.setCategories();
		this.refresh(this.state.currentPage, this.state.currentCategoryId, this.state.sortColumn);
	}

	setCategories = () => {
		this.setState({
			categories: [{ id: 0, name: '全部' }, ...getGoodsCategories()],
		});
	};

	refresh = (currentPage, currentCategoryId, sortColumn) => {
		let paginationGoods = getGoodsByPagination(
			currentPage,
			this.state.pageSize,
			currentCategoryId,
			sortColumn
		);
		if (paginationGoods.goods.length === 0 && currentPage > 1) {
			//当前页删完后，需要刷新
			currentPage -= 1;
			paginationGoods = getGoodsByPagination(
				currentPage,
				this.state.pageSize,
				currentCategoryId,
				sortColumn
			);
		}

		this.setState({
			currentPage: currentPage,
			goods: paginationGoods.goods,
			maxPage: paginationGoods.maxPage,
			total: paginationGoods.total,
			currentCategoryId: currentCategoryId,
			sortColumn: sortColumn,
		});
	};

	render() {
		return (
			<Cart
				goods={this.state.goods}
				handleDeleteGoods={this.handleDeleteGoods}
				handleToggleLike={this.handleToggleLike}
				currentPage={this.state.currentPage}
				total={this.state.total}
				maxPage={this.state.maxPage}
				onPageChanged={this.handlePageChanged}
				categories={this.state.categories}
				currentCategoryId={this.state.currentCategoryId}
				onCategoryChanged={this.handleCategoryChange}
				onSort={this.handleSort}
				sortColumn={this.state.sortColumn}
			></Cart>
		);
	}

	handleDeleteGoods = goodsId => {
		deleteGoodsById(goodsId);

		this.refresh(this.state.currentPage, this.state.currentCategoryId, this.state.sortColumn);
	};

	handleToggleLike = goods => {
		const newGoods = [...this.state.goods];
		const index = newGoods.indexOf(goods);
		newGoods[index].liked = !newGoods[index].liked;
		this.setState({
			goods: newGoods,
		});
	};

	handlePageChanged = page => {
		if (page !== this.state.currentPage) {
			this.refresh(page, this.state.currentCategoryId, this.state.sortColumn);
		}
	};

	handleCategoryChange = category => {
		const currentCategoryId = category.id;
		if (this.state.currentCategory !== currentCategoryId) {
			this.refresh(1, currentCategoryId, this.state.sortColumn);
		}
	};

	handleSort = sortColumn => {
		this.refresh(1, this.state.currentCategoryId, sortColumn);
	};
}

export default CartController;
