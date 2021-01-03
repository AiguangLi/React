const goods = [
	{ id: 1, name: '商品1', category: '日用品', price: '3.46' },
	{ id: 2, name: '商品2', category: '食品', price: '5.6' },
	{ id: 3, name: '商品3', category: '食品', price: '10.46' },
	{ id: 4, name: '商品4', category: '日用品', price: '36.6' },
	{ id: 5, name: '商品5', category: '日用品', price: '12.46' },
];

export function getGoods() {
	return goods;
}

export function getGoodsById(id) {
	return goods.filter(good => good.id === id);
}
