let goods = [
	{ id: 1, name: '商品1', category: '日用品', price: '3.46', liked: true },
	{ id: 2, name: '商品2', category: '食品', price: '5.6', liked: false },
	{ id: 3, name: '商品3', category: '食品', price: '10.46', liked: false },
	{ id: 4, name: '商品4', category: '日用品', price: '36.6', liked: false },
	{ id: 5, name: '商品5', category: '日用品', price: '12.46', liked: false },
	{ id: 6, name: '商品6', category: '食品', price: '110.46', liked: false },
	{ id: 7, name: '商品7', category: '家具', price: '326.6', liked: false },
	{ id: 8, name: '商品8', category: '日用品', price: '122.46', liked: false },
];

export function getGoods() {
	return goods;
}

export function getGoodsByPagination(page, pageSize) {
	if (page < 1 || pageSize < 1) return [];
	return {
		total: goods.length,
		maxPage: Math.ceil(goods.length / pageSize),
		goods: goods.slice((page - 1) * pageSize, page * pageSize),
	};
}

export function deleteGoodsById(goodsId) {
	const newGoods = goods.filter(item => item.id !== goodsId);
	goods = newGoods;
}

export function getGoodsById(id) {
	return goods.filter(good => good.id === id);
}
