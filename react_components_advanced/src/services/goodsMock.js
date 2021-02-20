import httpService from '@/services/httpService';
import config from '@/config/config.json';

export async function listGoodsByPagination(page, pageSize) {
	const restUrl = `${config.goodsHost}?offset=${page * pageSize}&limit=${pageSize}`;

	const { data, headers, status, statusText } = await httpService.get(restUrl);

	console.log(data);
}

export async function deleteGoods(id) {
	const restUrl = `${config.goodsHost}/${id}`;

	const { data, headers, status, statusText } = await httpService.delete(restUrl);

	console.log(data);
}
