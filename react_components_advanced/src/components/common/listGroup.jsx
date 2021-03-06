import React from 'react';
import PropTypes from 'prop-types';

import withTooltip from '@/components/hoc/withTooltip';
import indexStyle from '@/css/index.scss';

const ListGroup = props => {
	const { items, currentValue, textProperty, valueProperty, onItemSelected } = props;
	const defaultItemClass = indexStyle.clickable + ' list-group-item';
	return (
		<ul className="list-group">
			{items.map(item => {
				return (
					<li
						className={
							defaultItemClass +
							(item[valueProperty] === currentValue ? ' active' : '')
						}
						key={item[valueProperty]}
						onClick={() => onItemSelected(item)}
					>
						{item[textProperty]}
						{props.showTooltip && <span> {item._id}</span>}
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
	valueProperty: '_id',
	textProperty: 'name',
};

// 仅为演示高阶组件
export default withTooltip(ListGroup);
