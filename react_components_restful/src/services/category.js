import _ from 'lodash';
import httpService from '@/services/httpService';
import config from '@/config/config.json';

let goodsCategories = [
	{ id: 1, name: '日用品' },
	{ id: 2, name: '食品' },
	{ id: 3, name: '家具' },
	{ id: 4, name: '家电' },
];

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
	const category = _(goodsCategories).filter({ id: categoryId }).take(1).first();

	return category;

	// try {
	// 	const result = await httpService.get(apiUrl + '/' + categoryId);

	// 	return result;
	// } catch (ex) {
	// 	return ex.response;
	// }
}
