import httpService from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/goods';

export function getAllGoods() {
	return httpService.request(httpService.httpMethod.GET, apiUrl);
}

export async function getGoods(goodsId) {
	return httpService.request(httpService.httpMethod.GET, apiUrl + '/' + goodsId);
}

export async function deleteGoods(goodsId) {
	return httpService.request(httpService.httpMethod.DELETE, apiUrl + '/' + goodsId);
}

export async function addGoods(form) {
	return httpService.request(httpService.httpMethod.POST, apiUrl, form);
}

export async function editGoods(goodsId, form) {
	return httpService.request(httpService.httpMethod.PUT, apiUrl + '/' + goodsId, form);
}
