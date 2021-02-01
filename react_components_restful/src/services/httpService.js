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

export default {
	get: axios.get,
	put: axios.put, //局部更新
	post: axios.post,
	patch: axios.patch, //全部更新
	delete: axios.delete,
};
