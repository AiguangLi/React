import React from 'react';
import Joi from 'joi';

import { editGoods, getGoodsById } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';
import Form from '@/components/common/form';

class EditGoodsForm extends Form {
	state = {
		data: {
			id: this.props.match.params.id,
			name: '',
			price: '',
			category: '',
		},
		errors: {},
		categories: [],
	};

	componentDidMount() {
		const goodsId = this.props.match.params.id;
		if (!goodsId) {
			this.props.history.replace('/not-found');

			return;
		}
		const goods = getGoodsById(this.props.match.params.id);
		if (!goods) {
			this.props.history.replace('/not-found');

			return;
		}
		const categories = getGoodsCategories().map(category => category.name);

		this.setState({
			data: goods,
			categories: categories,
		});
	}

	validationSchema = {
		id: Joi.number().required().label('商品编号'),
		name: Joi.string().min(2).required().label('商品名称'),
		price: Joi.number().precision(2).positive().required().label('价格'),
		category: Joi.string().required().label('商品类别'),
	};

	doSubmit = () => {
		const result = editGoods(this.state.data);

		if (result.success === false) {
			console.error(result.error);

			return;
		}

		this.props.history.goBack();
	};

	render() {
		const { data, categories } = this.state;
		return (
			<div className="container">
				<h2>编辑商品</h2>
				{this.renderInput('名称', 'name')}
				{/* {this.renderInput('类别', 'category')} */}
				{this.renderSelect('类别', 'category', categories, data.category)}
				{this.renderInput('价格', 'price')}
				{this.renderButton('保存')}
			</div>
		);
	}
}

export default EditGoodsForm;
