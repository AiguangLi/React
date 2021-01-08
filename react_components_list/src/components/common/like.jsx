import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Like.propTypes = {
	onToggleLike: PropTypes.func.isRequired,
};

export default Like;
