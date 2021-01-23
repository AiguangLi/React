import paginate from '@/utils/paginate';
import { getCategoryById } from '@/services/category';
import _ from 'lodash';

let goods = [
	{ id: 1, name: '商品1', category: '日用品', price: 3.46, liked: true },
	{ id: 2, name: '商品2', category: '食品', price: 5.6, liked: false },
	{ id: 3, name: '商品3', category: '食品', price: 10.46, liked: false },
	{ id: 4, name: '商品4', category: '日用品', price: 36.6, liked: false },
	{ id: 5, name: '商品5', category: '日用品', price: 12.46, liked: false },
	{ id: 6, name: '商品6', category: '食品', price: 110.46, liked: false },
	{ id: 7, name: '商品7', category: '家具', price: 326.6, liked: false },
	{ id: 8, name: '商品8', category: '日用品', price: 122.46, liked: false },
];

export function getGoods() {
	return goods;
}

export function getGoodsByPagination(
	page,
	pageSize,
	categoryId = 0,
	sortType = { field: 'id', direction: 'asc' }
) {
	if (page < 1 || pageSize < 1) return [];

	let filteredGoods = [];
	if (categoryId === 0) {
		filteredGoods = goods;
	} else {
		const category = getCategoryById(categoryId);
		filteredGoods = goods.filter(item => item.category === category.name);
	}

	filteredGoods = _.orderBy(filteredGoods, [sortType.field], [sortType.direction]);

	return {
		total: filteredGoods.length,
		maxPage: Math.ceil(filteredGoods.length / pageSize),
		goods: paginate(filteredGoods, page, pageSize),
	};
}

export function deleteGoodsById(goodsId) {
	const newGoods = goods.filter(item => item.id !== goodsId);
	goods = newGoods;
}

export function getGoodsById(id) {
	return goods.filter(good => good.id === id);
}

export function addGoods(goodsForm) {
	const newGoodsId = _.reduce(
		goods,
		(maxId, goods) => {
			return maxId > goods.id ? maxId : goods.id;
		},
		goods[0].id
	);

	console.log(goodsForm);

	const newGoods = {
		id: newGoodsId + 1,
		...goodsForm,
	};

	goods.push(newGoods);
}
