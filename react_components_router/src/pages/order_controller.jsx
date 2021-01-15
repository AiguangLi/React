import React, { Component } from 'react';

class OrderController extends Component {
	render() {
		return (
			<div>
				<h3>
					Orders: {this.props.match.params.year}-{this.props.match.params.month}
				</h3>
			</div>
		);
	}
}

export default OrderController;
