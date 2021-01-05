import React, { Component } from 'react';

const Like = props => {
	let className = 'fa fa-heart';
	if (!props.liked) {
		className += '-o';
	}
	return (
		<i
			onClick={props.onToggleLike}
			className={className}
			aria-hidden="true"
			style={{ cursor: 'pointer' }}
		></i>
	);
};

export default Like;
