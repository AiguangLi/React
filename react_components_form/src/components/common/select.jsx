import React from 'react';

const Select = ({ items, name, label, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<select id={name} name={name} className="form-control" {...rest}>
				{items.map(item => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
};

export default Select;
