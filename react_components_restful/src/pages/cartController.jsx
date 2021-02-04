import React, { Component } from 'react';

import toast from '@/utils/toast.js';
import { getAllGoods, deleteGoods } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';

import Cart from '@/components/cart';
import { ceil } from 'lodash';

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
			searchKey: '',
		};
	}

	componentDidMount() {
		this.setCategories();
		this.refresh(
			this.state.currentPage,
			this.state.currentCategoryId,
			this.state.searchKey,
			this.state.sortColumn
		);
	}

	setCategories = async () => {
		const { data, status, statusText } = await getGoodsCategories();
		if (status === 200 || status === 201) {
			this.setState({
				categories: [{ _id: 0, name: '全部' }, ...data],
			});
		} else {
			toast.error(statusText);
		}
	};

	refresh = async (currentPage, currentCategoryId, searchKey, sortColumn) => {
		// let paginationGoods = getGoodsByPagination(
		// 	currentPage,
		// 	this.state.pageSize,
		// 	currentCategoryId,
		// 	searchKey,
		// 	sortColumn
		// );
		// if (paginationGoods.goods.length === 0 && currentPage > 1) {
		// 	//当前页删完后，需要刷新
		// 	currentPage -= 1;
		// 	paginationGoods = getGoodsByPagination(
		// 		currentPage,
		// 		this.state.pageSize,
		// 		currentCategoryId,
		// 		searchKey,
		// 		sortColumn
		// 	);
		// }

		const { data, status, statusText } = await getAllGoods();
		if (status === 200 || status === 201) {
			this.setState({
				currentPage: currentPage,
				goods: this.mapToViewModel(data),
				maxPage: ceil(data.length / this.state.pageSize),
				total: data.length,
				currentCategoryId: currentCategoryId,
				sortColumn: sortColumn,
				searchKey: searchKey,
			});
		} else {
			toast.error(statusText);
		}
	};

	mapToViewModel = goods => {
		return goods.map(item => {
			const listItem = { ...item };
			listItem.category = listItem.category.name;

			return listItem;
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
				searchKey={this.state.searchKey}
				onSearchChanged={this.handleSearchChanged}
			></Cart>
		);
	}

	handleSearchChanged = keyword => {
		this.refresh(1, this.state.currentCategoryId, keyword, this.state.sortColumn);
	};

	handleDeleteGoods = async goodsId => {
		const { status, statusText } = await deleteGoods(goodsId);
		if (status === 200 || status === 201) {
			this.refresh(
				this.state.currentPage,
				this.state.currentCategoryId,
				this.state.searchKey,
				this.state.sortColumn
			);
		} else {
			toast.error(statusText);
		}
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
			this.refresh(
				page,
				this.state.currentCategoryId,
				this.state.searchKey,
				this.state.sortColumn
			);
		}
	};

	handleCategoryChange = category => {
		const currentCategoryId = category._id;
		if (this.state.currentCategory !== currentCategoryId) {
			//分类发生改变，清空搜索框
			//this.refresh(1, currentCategoryId, '', this.state.sortColumn);
			this.setState({
				currentCategoryId: currentCategoryId,
			});
		}
	};

	handleSort = sortColumn => {
		this.refresh(1, this.state.currentCategoryId, this.state.searchKey, sortColumn);
	};
}

export default CartController;
