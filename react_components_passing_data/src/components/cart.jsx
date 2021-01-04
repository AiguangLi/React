import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getGoods } from '@/services/goods';
import Tables from '@/components/tables';
import Counter from '@/components/counter';
import { throwStatement } from 'babel-types';

export default class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goods: getGoods(),
		};
	}

	render() {
		const { counters, onReset, onDelete, onIncrease, onDecrease } = this.props;
		return (
			<div>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						handleIncrease={onIncrease}
						handleDecrease={onDecrease}
						handleDelete={onDelete}
					></Counter>
				))}
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					重置
				</button>
				<Tables goods={this.state.goods} handleDelete={this.handleDeleteGoods}></Tables>
			</div>
		);
	}

	handleDeleteGoods = goodsId => {
		const newGoods = this.state.goods.filter(item => item.id !== goodsId);
		this.setState({
			goods: newGoods,
		});
	};

	getGoodsCount = () => {
		return this.state.count;
	};
}
