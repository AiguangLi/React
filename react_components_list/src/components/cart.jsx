import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tables from '@/components/tables';
import ListGroup from '@/components/common/listGroup';

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
			categories,
			currentCategory,
		} = this.props;
		return (
			<div className="row m-4">
				<div className="col-3">
					<ListGroup categories={categories} currentCategory={currentCategory} />
				</div>
				<div className="col-8">
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
			</div>
		);
	}
}
