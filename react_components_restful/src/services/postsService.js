import httpService from '@/services/httpService';
import config from '@/config/config.json';

async function listAll() {
	try {
		const result = await httpService.get(config.postHost);

		return result;
	} catch (ex) {
		console.log(ex);
	}
}

async function deletePost(postId) {
	try {
		const restUrl = `${config.postHost}/${postId}`;
		const result = await httpService.delete(restUrl);

		return result;
	} catch (ex) {
		console.log(ex);
	}
}

async function get(postId) {
	try {
		const restUrl = `${config.postHost}/${postId}`;
		const result = await httpService.get(restUrl);

		return result;
	} catch (ex) {
		console.log(ex);
	}
}

async function edit(postId, form) {
	try {
		const restUrl = `${config.postHost}/${postId}`;
		const result = await httpService.put(restUrl, form);

		return result;
	} catch (ex) {
		console.log(ex);
	}
}

async function add(form) {
	try {
		const result = await httpService.post(config.postHost, form);

		return result;
	} catch (ex) {
		console.log(ex);
	}
}

export default {
	listAll: listAll,
	deletePost: deletePost,
	get: get,
	edit: edit,
	add: add,
};
