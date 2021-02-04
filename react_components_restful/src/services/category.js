import httpService from '@/services/httpService';
import config from '@/config/config.json';

const apiUrl = config.goodsHost + '/categories';

export async function getGoodsCategories() {
	try {
		const result = await httpService.get(apiUrl);

		return result;
	} catch (ex) {
		return ex.response;
	}
}

export function getCategoryById(categoryId) {
	try {
		const result = await httpService.get(apiUrl + '/' + categoryId);

		return result;
	} catch (ex) {
		return ex.response;
	}
}
