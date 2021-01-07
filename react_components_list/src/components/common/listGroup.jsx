import React from 'react';

const ListGroup = props => {
	const { items, currentValue, textProperty, valueProperty, onItemSelected } = props;
	return (
		<ul className="list-group">
			{items.map(item => {
				return (
					<li
						className={
							'list-group-item' +
							(item[valueProperty] === currentValue ? ' active' : '')
						}
						key={item[valueProperty]}
						onClick={() => onItemSelected(item)}
					>
						{item[textProperty]}
					</li>
				);
			})}
		</ul>
	);
};

export default ListGroup;
