import React from 'react';

const ListGroup = props => {
	const { categories, currentCategory, onCategoryChanged } = props;
	return (
		<ul className="list-group">
			{categories.map(category => {
				return (
					<li
						className={
							'list-group-item' + (category.id === currentCategory ? ' active' : '')
						}
						key={category.id}
						onClick={() => onCategoryChanged(category)}
					>
						{category.name}
					</li>
				);
			})}
		</ul>
	);
};

export default ListGroup;
