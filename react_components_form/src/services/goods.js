import paginate from '@/utils/paginate';
import { getCategoryById } from '@/services/category';
import _ from 'lodash';
import { keys } from 'regenerator-runtime';

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
	searchName,
	sortType = { field: 'id', direction: 'asc' }
) {
	if (page < 1 || pageSize < 1) return [];

	let filteredGoods = [];
	if (categoryId === 0) {
		if (!searchName) {
			filteredGoods = goods;
		} else {
			filteredGoods = goods.filter(item => item.name.indexOf(searchName) !== -1);
		}
	} else {
		const category = getCategoryById(categoryId);
		filteredGoods = goods.filter(item => {
			return (
				item.category === category.name &&
				(searchName ? item.name.indexOf(searchName) !== -1 : true)
			);
		});
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

export function getGoodsById(goodsId) {
	const goodsToFount = goods.filter(item => item.id == goodsId);

	return goodsToFount.length === 1 ? goodsToFount[0] : null;
}

export function addGoods(goodsForm) {
	const newGoodsId = _.reduce(
		goods,
		(maxId, goods) => {
			return maxId > goods.id ? maxId : goods.id;
		},
		goods[0].id
	);

	const newGoods = {
		id: newGoodsId + 1,
		...goodsForm,
	};

	goods.push(newGoods);
}

export function editGoods(goodsForm) {
	const goodsToEdit = getGoodsById(goodsForm.id);
	if (!goodsToEdit) {
		return { success: false, error: `Goods with Id ${goodsForm.id} Not Found.` };
	}

	for (let key in goodsForm) {
		if (key in goodsToEdit) {
			goodsToEdit[key] = goodsForm[key];
		}
	}

	return { success: true };
}
