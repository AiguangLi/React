import httpService from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/auth';

function register(form) {
	const userUrl = config.goodsHost + '/users';

	return httpService.request(httpService.httpMethod.POST, userUrl, form);
}

function saveJwt(jwt) {
	localStorage.setItem('jwt', jwt);
	httpService.setJwt(jwt);
}

export default {
	register,
	saveJwt,
};
