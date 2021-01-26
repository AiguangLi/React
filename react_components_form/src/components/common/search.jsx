import React from 'react';

const Search = ({ onChange, ...rest }) => {
	return (
		<input
			type="text"
			className="form-control my-2"
			onChange={e => {
				onChange(e.currentTarget.value.trim());
			}}
			{...rest}
		></input>
	);
};

export default Search;
