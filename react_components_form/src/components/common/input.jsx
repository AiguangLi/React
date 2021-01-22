import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name} className="form-label">
				{label}
			</label>
			<input className="form-control" id={name} name={name} {...rest}></input>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
