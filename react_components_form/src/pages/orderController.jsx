import React, { Component } from 'react';
import queryString from 'query-string';

class OrderController extends Component {
	render() {
		const queryParams = queryString.parse(this.props.location.search.toLowerCase());
		return (
			<div>
				<h3>
					Orders:
					<p>
						year: {queryParams.year}, sortByNewest:
						{queryParams.sort === 'newest' ? ' yes' : ' no'}
					</p>
				</h3>
			</div>
		);
	}
}

export default OrderController;
