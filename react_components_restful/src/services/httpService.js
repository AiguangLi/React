import axios from 'axios';

axios.interceptors.response.use(null, error => {
	const expectedError =
		error.response && error.response.status >= 400 && error.response.status < 500;
	// 未知异常
	if (!expectedError) {
		console.log('UnExpected Error', error);
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	put: axios.put, //局部更新
	post: axios.post,
	patch: axios.patch, //全部更新
	delete: axios.delete,
};
