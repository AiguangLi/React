import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tables from '@/components/tables';

export default class Cart extends Component {
	render() {
		const {
			goods,
			handleDeleteGoods,
			handleToggleLike,
			onPageChanged,
			currentPage,
			maxPage,
			total,
		} = this.props;
		return (
			<div>
				<Tables
					goods={goods}
					handleDelete={handleDeleteGoods}
					onToggleLike={handleToggleLike}
					onPageChanged={onPageChanged}
					currentPage={currentPage}
					maxPage={maxPage}
					total={total}
				></Tables>
			</div>
		);
	}
}
