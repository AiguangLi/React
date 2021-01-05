import React from 'react';

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
