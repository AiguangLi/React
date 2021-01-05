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

	let element;
	const { currentPage, maxPage, onPageChanged } = props;
	for (let page = 1; page <= maxPage; ++page) {
		if (page == currentPage) {
			element = (
				<li className="page-item active" aria-current="page" key={page}>
					<span className="page-link">{page}</span>
				</li>
			);
		} else {
			element = (
				<li className="page-item" key={page}>
					<a className="page-link" onClick={() => onPageChanged(page)}>
						{page}
					</a>
				</li>
			);
		}

		pageElements.push(element);
	}

	return pageElements;
}
