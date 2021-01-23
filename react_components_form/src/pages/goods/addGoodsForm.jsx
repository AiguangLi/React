import React, { Component } from 'react';
import Joi from 'joi';

import { addGoods } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';
import Form from '@/components/common/form';

class AddGoodsForm extends Form {
	state = {
		data: {
			name: '',
			price: '',
			category: '',
		},
		errors: {},
	};

	validationSchema = {
		name: Joi.string().min(2).required().label('商品名称'),
		price: Joi.number().precision(2).positive().required().label('价格'),
		category: Joi.string().required().label('商品类别'),
	};

	doSubmit = () => {
		addGoods(this.state.data);

		this.props.history.goBack();
	};

	render() {
		const categories = getGoodsCategories().map(category => category.name);
		return (
			<div className="container">
				<h2>添加商品</h2>
				{this.renderInput('名称', 'name')}
				{/* {this.renderInput('类别', 'category')} */}
				{this.renderSelect('类别', 'category', categories, categories[0].name)}
				{this.renderInput('价格', 'price')}
				{this.renderButton('保存')}
			</div>
		);
	}
}

export default AddGoodsForm;
