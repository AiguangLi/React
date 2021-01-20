import React from 'react';

const Input = ({ name, value, label, onChange, type }) => {
	return (
		<div className="form-group">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input
				type={type}
				className="form-control"
				id={name}
				name={name}
				value={value}
				onChange={onChange}
			></input>
		</div>
	);
};

export default Input;
