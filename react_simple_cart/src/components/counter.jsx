import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		//console.log(this.props);
		this.state = { id: null, value: 0 };
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			value: this.props.value,
		});
	}

	render() {
		return (
			<div>
				<span className={this.getGoodsCountStyles()}>{this.state.value}</span>
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={() => {
						this.increaseCount();
					}}
				>
					添加
				</button>
				<button
					className="btn btn-warning btn-sm m-2"
					onClick={() => {
						this.decreaseCount();
					}}
				>
					减少
				</button>
			</div>
		);
	}

	increaseCount = () => {
		this.setState({
			value: this.state.value + 1,
		});
	};

	decreaseCount = () => {
		const newValue = this.state.value - 1;
		this.setState({
			value: newValue >= 0 ? newValue : 0,
		});
	};

	getGoodsCountStyles = () => {
		const styles = 'badge m-2 badge-';

		return this.state.value === 0 ? styles + 'warning' : styles + 'primary';
	};
}

export default Counter;
