const { Goods, validate } = require('../models/goods');
const { Category } = require('../models/category');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateObjectId = require('../middleware/validateObjectId');
const moment = require('moment');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const goods = await Goods.find().select('-__v').sort('name');
	res.send(goods);
});

router.post('/', [auth], async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const category = await Category.findById(req.body.categoryId);
	if (!category) return res.status(400).send('Invalid category.');

	const goods = new Goods({
		name: req.body.name,
		category: {
			_id: category._id,
			name: category.name,
		},
		price: req.body.price,
		liked: req.body.liked,
		publishDate: moment().toJSON(),
	});
	await goods.save();

	res.send(goods);
});

router.put('/:id', [auth], async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const category = await Category.findById(req.body.categoryId);
	if (!category) return res.status(400).send('Invalid category.');

	const goods = await Goods.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			category: {
				_id: category._id,
				name: category.name,
			},
			price: req.body.price,
			liked: req.body.liked,
		},
		{ new: true }
	);

	if (!goods) return res.status(404).send('The goods with the given ID was not found.');

	res.send(goods);
});

router.delete('/:id', [auth, admin], async (req, res) => {
	const goods = await Goods.findByIdAndRemove(req.params.id);

	if (!goods) return res.status(404).send('The goods with the given ID was not found.');

	res.send(goods);
});

router.get('/:id', validateObjectId, async (req, res) => {
	const goods = await Goods.findById(req.params.id).select('-__v');

	if (!goods) return res.status(404).send('The goods with the given ID was not found.');

	res.send(goods);
});

module.exports = router;
