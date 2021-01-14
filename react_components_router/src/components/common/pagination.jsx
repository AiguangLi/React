import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination(props) {
	const { currentPage, maxPage, onPageChanged } = props;

	if (maxPage === 1) return null; //仅有一页不渲染分页组件

	return (
		<nav aria-label="...">
			<ul className="pagination">
				<PageItems
					currentPage={currentPage}
					maxPage={maxPage}
					onPageChanged={onPageChanged}
				></PageItems>
			</ul>
		</nav>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	maxPage: PropTypes.number.isRequired,
	onPageChanged: PropTypes.func.isRequired,
};

function PageItems(props) {
	const pageElements = [];

	const { currentPage, maxPage, onPageChanged } = props;
	for (let page = 1; page <= maxPage; ++page) {
		pageElements.push(
			<li
				className={page === currentPage ? 'page-item active' : 'page-item'}
				key={page}
				onClick={() => onPageChanged(page)}
			>
				<span className="page-link">{page}</span>
			</li>
		);
	}

	return pageElements;
}
