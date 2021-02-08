import jwt_decode from 'jwt-decode';

import httpService from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/auth';

function register(form) {
	const userUrl = config.goodsHost + '/users';

	return httpService.request(httpService.httpMethod.POST, userUrl, form);
}

function login(form) {
	return httpService.request(httpService.httpMethod.POST, apiUrl, form);
}

function saveJwt(jwt) {
	localStorage.setItem('jwt', jwt);
	httpService.setJwt(jwt);
}

function logout() {
	localStorage.removeItem('jwt');
}

function getCurrentUser() {
	const jwt = localStorage.getItem('jwt');
	if (!jwt) {
		return null;
	}

	try {
		return jwt_decode(jwt);
	} catch (ex) {
		// 解密失败则返回null
		return null;
	}
}

export default {
	register,
	login,
	logout,
	saveJwt,
	getCurrentUser,
};
