import axios from 'axios';
import toast from '@/utils/toast.js';

axios.interceptors.response.use(null, error => {
	const expectedError =
		error.response && error.response.status >= 400 && error.response.status < 500;
	// 未知异常
	if (!expectedError) {
		toast.showError(`出错了！${expectedError.status} ${expectedError.statusText}`);
	}

	return Promise.reject(error);
});

// 设置全局jwt访问headers
function setJwt(jwt) {
	axios.defaults.headers.common['x-auth-token'] = jwt;
}

async function request(method, url, data) {
	let result = null;
	try {
		switch (method) {
			case httpMethod.GET:
				result = await axios.get(url);
				break;
			case httpMethod.DELETE:
				result = await axios.delete(url);
				break;
			case httpMethod.POST:
				result = await axios.post(url, data);
				break;
			case httpMethod.PATCH:
				result = await axios.patch(url, data);
				break;
			case httpMethod.PUT:
				result = await axios.put(url, data);
				break;
			default:
				break;
		}
	} catch (ex) {
		result = ex.response;
	}

	return result;
}

const httpMethod = {
	POST: 'post',
	GET: 'get',
	DELETE: 'delete',
	PATCH: 'patch',
	PUT: 'put',
};

export default {
	get: axios.get,
	put: axios.put, //局部更新
	post: axios.post,
	patch: axios.patch, //全部更新
	delete: axios.delete,
	httpMethod,
	setJwt,
	request,
};
