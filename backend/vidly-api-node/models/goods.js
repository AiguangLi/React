const Joi = require('joi');
const mongoose = require('mongoose');
const { categorySchema } = require('./category');

const Goods = mongoose.model(
	'Goods',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
			maxlength: 128,
		},
		category: {
			type: categorySchema,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
			max: 999999,
		},
		liked: {
			type: Boolean,
			required: true,
		},
	})
);

function validateGoods(goods) {
	const schema = {
		name: Joi.string().min(2).max(50).required(),
		categoryId: Joi.objectId().required(),
		price: Joi.number().min(0).required(),
		liked: Joi.boolean().required(),
	};

	return Joi.validate(goods, schema);
}

exports.Goods = Goods;
exports.validate = validateGoods;
