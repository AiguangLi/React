import React from 'react';

import authService from '@/services/auth';

const Logout = props => {
	authService.logout();
	window.location = '/';
	return null;
};

export default Logout;
