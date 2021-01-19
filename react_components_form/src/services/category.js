import _ from 'lodash';

let goodsCategories = [
	{ id: 1, name: '日用品' },
	{ id: 2, name: '食品' },
	{ id: 3, name: '家具' },
	{ id: 4, name: '家电' },
];

export function getGoodsCategories() {
	return goodsCategories;
}

export function getCategoryById(categoryId) {
	const category = _(goodsCategories).filter({ id: categoryId }).take(1).first();

	return category;
}
