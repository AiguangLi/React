import React from 'react';
import PropTypes from 'prop-types';

import indexStyle from '@/css/index.scss';

const Like = props => {
	let className = indexStyle.clickable + ' fa fa-heart';
	if (!props.liked) {
		className += '-o';
	}
	return <i onClick={props.onToggleLike} className={className} aria-hidden="true"></i>;
};

Like.propTypes = {
	onToggleLike: PropTypes.func.isRequired,
};

export default Like;
