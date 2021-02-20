import httpService, { httpMethod } from '@/services/httpService';
import config from '@/config/config.json';

function listAll() {
	return httpService.request(httpMethod.GET, config.postHost);
}

function deletePost(postId) {
	const restUrl = `${config.postHost}/${postId}`;
	return httpService.request(httpMethod.DELETE, restUrl);
}

function get(postId) {
	const restUrl = `${config.postHost}/${postId}`;
	return httpService.request(httpMethod.GET, restUrl);
}

function edit(postId, form) {
	const restUrl = `${config.postHost}/${postId}`;
	return httpService.request(httpMethod.PUT, restUrl, form);
}

function add(form) {
	return httpService.request(httpMethod.POST, config.postHost, form);
}

export default {
	listAll: listAll,
	deletePost: deletePost,
	get: get,
	edit: edit,
	add: add,
};
