import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getGoods } from '@/services/goods';
import Tables from '@/components/tables';
import Counter from '@/components/counter';
import { throwStatement } from 'babel-types';

export default class Cart extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			goods: getGoods(),
			counters: [
				{
					id: 1,
					value: 2,
				},
				{
					id: 2,
					value: 0,
				},
			],
		};
	}

	render() {
		return (
			<div>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						handleDelete={this.handleDeleteCounter}
						handleIncrease={this.handleIncreaseCounter}
						handleDecrease={this.handleDecreaseCounter}
					></Counter>
				))}
				<button onClick={() => this.resetCounters()} className="btn btn-primary btn-sm m-2">重置</button>
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

	resetCounters = () => {
		const newCounters = this.state.counters.map(item => {
			item.value = 0;

			return item;
		});

		this.setState({
			counters: newCounters,
		});
	}

	handleDeleteCounter = counterId => {
		const newCounters = this.state.counters.filter(item => item.id !== counterId);
		this.setState({
			counters: newCounters,
		});
	};

	handleIncreaseCounter = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value ++;

		this.setState({
			counters,
		});
	};

	handleDecreaseCounter = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value  = counters[index].value - 1 > 0 ? counters[index].value - 1 : 0;

		this.setState({
			counters,
		});
	};

	getGoodsCount = () => {
		return this.state.count;
	};

	increaseCount = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
}
