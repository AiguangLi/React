import React, { useState, useEffect } from 'react';

const UserLiked = () => {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

	const handleButtonClick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => {
			console.log('Clean up!');
		};
	});

	return (
		<div>
			<h4>User Liked</h4>
			<button className="btn btn-primary small" onClick={handleButtonClick}>
				{loading ? 'Loading...' : `Clicked (${count})`}
			</button>
		</div>
	);
};

export default UserLiked;
