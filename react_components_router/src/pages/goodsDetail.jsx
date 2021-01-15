import React, { Component } from 'react';

class GoodsDetail extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>GoodsId: {this.props.match.params.id}</h3>
			</div>
		);
	}
}

export default GoodsDetail;
