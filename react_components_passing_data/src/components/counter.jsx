import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { counter, handleDecrease, handleIncrease, handleDelete } = this.props;
		return (
			<div>
				<button
					className="btn btn-warning btn-sm m-1"
					onClick={() => {
						handleDecrease(counter);
					}}
					disabled={counter.value === 0 ? 'disabled' : ''}
				>
					-
				</button>
				<span className={this.getGoodsCountStyles()}>{counter.value}</span>
				<button
					className="btn btn-primary btn-sm m-1"
					onClick={() => {
						handleIncrease(counter);
					}}
				>
					+
				</button>

				<button
					className="btn btn-danger btn-sm m-1"
					onClick={() => {
						handleDelete(counter.id);
					}}
				>
					删除
				</button>
			</div>
		);
	}

	getGoodsCountStyles = () => {
		const styles = 'badge m-2 badge-';
		return this.props.counter.value === 0 ? styles + 'warning' : styles + 'primary';
	};
}

export default Counter;
