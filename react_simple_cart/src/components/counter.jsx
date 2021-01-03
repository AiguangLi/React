import React, { Component } from 'react';

class Counter extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button
					className="btn btn-warning btn-sm m-1"
					onClick={() => {
						this.props.handleDecrease(this.props.counter);
					}}
				>
					-
				</button>
				<span className={this.getGoodsCountStyles()}>{this.props.counter.value}</span>
				<button
					className="btn btn-primary btn-sm m-1"
					onClick={() => {
						this.props.handleIncrease(this.props.counter);
					}}
				>
					+
				</button>

				<button
					className="btn btn-danger btn-sm m-1"
					onClick={() => {
						this.props.handleDelete(this.props.counter.id);
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
