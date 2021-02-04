import React from 'react';
import Joi from 'joi';

import { addGoods } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';
import Form from '@/components/common/form';

class AddGoodsForm extends Form {
	state = {
		data: {
			name: '',
			price: '',
			categoryId: '',
			liked: false,
		},
		errors: {},
		categories: [],
	};

	validationSchema = {
		name: Joi.string().min(2).required().label('商品名称'),
		price: Joi.number().precision(2).positive().required().label('价格'),
		categoryId: Joi.string().required().label('类别编号'),
		liked: Joi.boolean().required().label('收藏'),
	};

	async componentDidMount() {
		const { data, status, statusText } = await getGoodsCategories();

		if (status === 200) {
			this.setState({
				categories: data,
			});
		} else {
			this.handleError(status, statusText);
		}
	}

	doSubmit = async () => {
		const { status, statusText } = await addGoods(this.state.data);
		if (status === 200) {
			this.props.history.goBack();
		} else {
			this.handleError(status, statusText);
		}
	};

	render() {
		const { categories } = this.state;
		return (
			<div className="container">
				<h2>添加商品</h2>
				{this.renderInput('名称', 'name')}
				{/* {this.renderInput('类别', 'category')} */}
				{this.renderSelect('类别', 'categoryId', categories, this.state.data.categoryId)}
				{this.renderInput('价格', 'price')}
				{this.renderButton('保存')}
			</div>
		);
	}
}

export default AddGoodsForm;
