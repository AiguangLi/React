import React from 'react';
import ReactDOM from 'react-dom';
import { getGoodsByPagination, deleteGoodsById } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';

import Cart from '@/components/cart';
import NavBar from '@/components/navbar';

class App extends React.Component {
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
		this.refresh(this.state.currentPage, this.state.currentCategoryId);
	}

	setCategories = () => {
		this.setState({
			categories: [{ id: 0, name: '全部' }, ...getGoodsCategories()],
		});
	};

	refresh = (currentPage, currentCategoryId, sortColumn) => {
		sortColumn = sortColumn || this.state.sortColumn;
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
			<React.Fragment>
				<NavBar totalCount={this.state.total}></NavBar>
				<main className="container">
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
				</main>
			</React.Fragment>
		);
	}

	handleDeleteGoods = goodsId => {
		deleteGoodsById(goodsId);

		this.refresh();
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
			this.refresh(page, this.state.currentCategoryId);
		}
	};

	handleCategoryChange = category => {
		const currentCategoryId = category.id;
		if (this.state.currentCategory !== currentCategoryId) {
			this.refresh(1, currentCategoryId);
		}
	};

	handleSort = sortColumn => {
		this.refresh(1, this.state.currentCategoryId, sortColumn);
	};
}

ReactDOM.render(<App />, document.getElementById('app'));
