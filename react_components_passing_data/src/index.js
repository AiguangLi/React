import React from 'react';
import ReactDOM from 'react-dom';

import Cart from '@/components/cart';
import NavBar from '@/components/navbar';
import { thisExpression } from 'babel-types';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			totalCount: 2,
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
			<React.Fragment>
				<NavBar totalCount={this.state.totalCount}></NavBar>
				<main className="container">
					<Cart
						counters={this.state.counters}
						onReset={this.resetCounters}
						onDelete={this.handleDeleteCounter}
						onIncrease={this.handleIncreaseCounter}
						onDecrease={this.handleDecreaseCounter}
					></Cart>
				</main>
			</React.Fragment>
		);
	}

	getTotalCounter = counters => {
		let totalCount = 0;

		counters.forEach(item => {
			totalCount += item.value;
		});

		return totalCount;
	};

	resetCounters = () => {
		const newCounters = this.state.counters.map(item => {
			item.value = 0;

			return item;
		});

		this.setState({
			counters: newCounters,
			totalCount: this.getTotalCounter(newCounters),
		});
	};

	handleDeleteCounter = counterId => {
		const newCounters = this.state.counters.filter(item => item.id !== counterId);
		this.setState({
			counters: newCounters,
			totalCount: this.getTotalCounter(newCounters),
		});
	};

	handleIncreaseCounter = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value++;

		this.setState({
			counters: counters,
			totalCount: this.getTotalCounter(counters),
		});
	};

	handleDecreaseCounter = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value = counters[index].value - 1 > 0 ? counters[index].value - 1 : 0;

		this.setState({
			counters: counters,
			totalCount: this.getTotalCounter(counters),
		});
	};
}

ReactDOM.render(<App />, document.getElementById('app'));
