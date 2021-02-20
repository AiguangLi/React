import React from 'react';
import Joi from 'joi';

import { editGoods, getGoods } from '@/services/goods';
import { getGoodsCategories } from '@/services/category';
import Form from '@/components/common/form';

class EditGoodsForm extends Form {
	state = {
		data: {
			_id: this.props.match.params.id,
			name: '',
			price: '',
			categoryId: '',
			liked: false,
		},
		errors: {},
		categories: [],
	};

	async componentDidMount() {
		const goodsId = this.props.match.params.id;
		if (!goodsId) {
			this.props.history.replace('/not-found');

			return;
		}
		await this.getCurrentGoods(goodsId);
		await this.populateCategories();

		// 使用mapToViewModel只取页面需要的数据，防止直接修改数据（如果是请求服务器接口不复制不影响，但是应当防止表单直接修改原始数据）
	}

	getCurrentGoods = async goodsId => {
		const { data, status } = await getGoods(goodsId);
		if (status !== 200 && status !== 201) {
			this.props.history.replace('/not-found');

			return;
		} else {
			this.setState({
				data: this.mapToViewModel(data),
			});
		}
	};

	populateCategories = async () => {
		const { data, status, statusText } = await getGoodsCategories();

		if (status === 200) {
			this.setState({
				categories: data,
			});
		} else {
			this.handleError(status, statusText);
		}
	};

	// 只取视图需要的数据，同时若返回的数据有对象，则可以处理对象
	mapToViewModel = goods => {
		const viewData = { ...goods };
		viewData.categoryId = viewData.category._id;
		delete viewData.category;

		return viewData;
	};

	validationSchema = {
		_id: Joi.string().required().label('商品编号'),
		name: Joi.string().min(2).required().label('商品名称'),
		price: Joi.number().precision(2).positive().required().label('价格'),
		categoryId: Joi.string().required().label('类别编号'),
		liked: Joi.boolean().required().label('收藏'),
	};

	doSubmit = async () => {
		const goods = { ...this.state.data };
		const goodsId = goods._id;
		delete goods._id;
		const { status, statusText } = await editGoods(goodsId, goods);

		if (status !== 200 && status !== 201) {
			this.handleError(status, statusText);
		} else {
			this.props.history.goBack();
		}
	};

	render() {
		const { data, categories } = this.state;
		return (
			<div className="container">
				<h2>编辑商品</h2>
				{this.renderInput('名称', 'name')}
				{/* {this.renderInput('类别', 'category')} */}
				{this.renderSelect('类别', 'categoryId', categories, data.categoryId)}
				{this.renderInput('价格', 'price')}
				{this.renderButton('保存')}
			</div>
		);
	}
}

export default EditGoodsForm;
