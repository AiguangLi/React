import httpService from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/goods';

export async function getAllGoods() {
	try {
		const result = await httpService.get(apiUrl);

		return result;
	} catch (ex) {
		return ex.response;
	}
}

export async function getGoods(goodsId) {
	try {
		const result = await httpService.get(apiUrl + '/' + goodsId);

		return result;
	} catch (ex) {
		return ex.response;
	}
}

export async function deleteGoods(goodsId) {
	try {
		const result = await httpService.delete(apiUrl + '/' + goodsId);

		return result;
	} catch (ex) {
		return ex.response;
	}
}

export async function addGoods(form) {
	try {
		const result = await httpService.post(apiUrl, form);

		return result;
	} catch (ex) {
		return ex.response;
	}
}

export async function editGoods(goodsId, form) {
	try {
		const result = await httpService.put(apiUrl + '/' + goodsId, form);

		return result;
	} catch (ex) {
		return ex.response;
	}
}
