import React from 'react';
import PropTypes from 'prop-types';

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

ListGroup.propTypes = {
	items: PropTypes.array.isRequired,
	currentValue: PropTypes.any.isRequired,
	onItemSelected: PropTypes.func.isRequired,
};

//设置默认属性
ListGroup.defaultProps = {
	valueProperty: 'id',
	textProperty: 'name',
};

export default ListGroup;
