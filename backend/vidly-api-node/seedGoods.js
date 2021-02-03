const { Category } = require('./models/category');
const { Goods } = require('./models/goods');
const mongoose = require('mongoose');
const config = require('config');

const data = [
	{
		name: '日用品',
		goods: [
			{ name: '香皂', price: 2.5, liked: false },
			{ name: '洗发水', price: 10.2, liked: false },
			{ name: '毛巾', price: 15, liked: false },
		],
	},
	{
		name: '食品',
		goods: [
			{ name: '面包', price: 5, liked: false },
			{ name: '红酒', price: 110, liked: false },
			{ name: '水果', price: 15, liked: true },
		],
	},
	{
		name: '数码产品',
		goods: [
			{ name: 'iPhone', price: 4565, liked: false },
			{ name: '电脑', price: 3090, liked: false },
			{ name: '手机', price: 195, liked: false },
		],
	},
	{
		name: '服装',
		goods: [
			{ name: '男装', price: 55, liked: false },
			{ name: '女装', price: 105, liked: false },
			{ name: '童装', price: 155, liked: false },
		],
	},
];

async function seed() {
	await mongoose.connect(config.get('db'));

	await Goods.deleteMany({});
	await Category.deleteMany({});

	for (let category of data) {
		const { _id: categoryId } = await new Category({ name: category.name }).save();
		const goods = category.goods.map(item => ({
			...item,
			category: { _id: categoryId, name: category.name },
		}));
		await Goods.insertMany(goods);
	}

	mongoose.disconnect();

	console.info('Done!');
}

seed();
