import React from 'react';
import ReactDOM from 'react-dom';
import { getGoodsByPagination, deleteGoodsById } from '@/services/goods';

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
		};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		let currentPage = this.state.currentPage;
		let paginationGoods = getGoodsByPagination(this.state.currentPage, this.state.pageSize);
		if (paginationGoods.goods.length === 0 && this.state.currentPage > 1) {
			//当前页删完后，需要刷新
			currentPage -= 1;
			paginationGoods = getGoodsByPagination(this.state.currentPage - 1, this.state.pageSize);
		}
		this.setState({
			currentPage: currentPage,
			goods: paginationGoods.goods,
			maxPage: paginationGoods.maxPage,
			total: paginationGoods.total,
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
		const paginationGoods = getGoodsByPagination(page, this.state.pageSize);
		this.setState({
			currentPage: page,
			goods: paginationGoods.goods,
		});
	};
}

ReactDOM.render(<App />, document.getElementById('app'));
