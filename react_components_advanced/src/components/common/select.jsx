import React from 'react';

const Select = ({ items, name, label, selectedItem, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<select id={name} name={name} className="form-control" value={selectedItem} {...rest}>
				<option value="">请选择{label}</option>
				{items.map(item => (
					<option key={item._id} value={item._id}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
