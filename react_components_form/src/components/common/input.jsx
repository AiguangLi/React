import React from 'react';

const Input = ({ name, value, label, onChange, type, error }) => {
	console.log(error);
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
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
