import axios from 'axios';

const HOST_URL = 'https://mockend.com/AiguangLi/React/goods';

export async function listGoodsByPagination(page, pageSize) {
	const restUrl = `${HOST_URL}?offset=${page * pageSize}&limit=${pageSize}`;

	const { data, headers, status, statusText } = await axios.get(restUrl);
}
