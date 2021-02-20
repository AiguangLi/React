import httpService, { httpMethod } from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/categories';

export function getGoodsCategories() {
	return httpService.request(httpMethod.GET, apiUrl);
}

export function getCategoryById(categoryId) {
	return httpService.request(httpMethod.GET, apiUrl + '/' + categoryId);
}
