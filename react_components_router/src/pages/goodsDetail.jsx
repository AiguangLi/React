import React, { Component } from 'react';

class GoodsDetail extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>GoodsId: {this.props.match.params.id}</h3>
				<p>
					<button
						className="btn btn-primary"
						onClick={() => {
							this.props.history.goBack();
						}}
					>
						保存
					</button>
				</p>
			</div>
		);
	}
}

export default GoodsDetail;
