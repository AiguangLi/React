import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getGoods } from '@/services/goods';
import Tables from '@/components/tables';
import Counter from '@/components/counter';

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
					<Counter key={counter.id} {...counter}></Counter>
				))}
				<Tables goods={this.state.goods} handleDelete={this.handleDelete}></Tables>
			</div>
		);
	}

	handleDelete = goodsId => {
		let newGoods = this.state.goods.filter(item => item.id !== goodsId);
		this.setState({
			goods: newGoods,
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
