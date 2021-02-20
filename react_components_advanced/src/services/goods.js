import httpService, { httpMethod } from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/goods';

export function getAllGoods() {
	return httpService.request(httpMethod.GET, apiUrl);
}

export async function getGoods(goodsId) {
	return httpService.request(httpMethod.GET, apiUrl + '/' + goodsId);
}

export async function deleteGoods(goodsId) {
	return httpService.request(httpMethod.DELETE, apiUrl + '/' + goodsId);
}

export async function addGoods(form) {
	return httpService.request(httpMethod.POST, apiUrl, form);
}

export async function editGoods(goodsId, form) {
	return httpService.request(httpMethod.PUT, apiUrl + '/' + goodsId, form);
}
