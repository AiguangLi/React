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
			currentCategory: 0,
		};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		let currentPage = this.state.currentPage;
		let paginationGoods = getGoodsByPagination(
			this.state.currentPage,
			this.state.pageSize,
			this.state.currentCategory
		);
		if (paginationGoods.goods.length === 0 && this.state.currentPage > 1) {
			//当前页删完后，需要刷新
			currentPage -= 1;
			paginationGoods = getGoodsByPagination(
				this.state.currentPage - 1,
				this.state.pageSize,
				this.state.currentCategory
			);
		}
		this.setState({
			currentPage: currentPage,
			goods: paginationGoods.goods,
			maxPage: paginationGoods.maxPage,
			total: paginationGoods.total,
			categories: [{ id: 0, name: '全部' }, ...getGoodsCategories()],
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
						currentCategory={this.state.currentCategory}
						onCategoryChanged={this.handleCategoryChange}
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
		const paginationGoods = getGoodsByPagination(
			page,
			this.state.pageSize,
			this.state.currentCategory
		);
		this.setState({
			currentPage: page,
			goods: paginationGoods.goods,
		});
	};

	handleCategoryChange = category => {
		const currentCategoryId = category.id;
		if (this.state.currentCategory !== currentCategoryId) {
			const paginationGoods = getGoodsByPagination(1, this.state.pageSize, currentCategoryId);
			this.setState({
				currentPage: 1,
				goods: paginationGoods.goods,
				currentCategory: currentCategoryId,
				total: paginationGoods.total,
				maxPage: paginationGoods.maxPage,
			});
		}
	};
}

ReactDOM.render(<App />, document.getElementById('app'));
