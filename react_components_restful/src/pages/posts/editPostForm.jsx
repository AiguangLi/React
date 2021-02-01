import React from 'react';
import Joi from 'joi';

import postsService from '@/services/postsService';
import Form from '@/components/common/form';

class EditPostForm extends Form {
	state = {
		data: {
			id: this.props.match.params.id,
			title: '',
			body: '',
		},
		errors: {},
	};

	async componentDidMount() {
		const postId = this.state.data.id;
		if (!postId) {
			this.props.history.replace('/not-found');

			return;
		}
		const { data, status, statusText } = await postsService.get(postId);

		if (status === 200 || status === 201) {
			this.setState({ data: this.mapToViewModel(data) });
		} else {
			this.handleError(status, statusText);

			return;
		}
	}

	// 只取视图需要的数据，同时若返回的数据有对象，则可以处理对象
	mapToViewModel = post => {
		const viewData = { ...this.state.data };
		for (let key in viewData) {
			if (post[key]) {
				viewData[key] = post[key];
			}
		}

		return viewData;
	};

	validationSchema = {
		id: Joi.number().required().label('文章编号'),
		title: Joi.string().min(2).max(128).required().label('标题'),
		body: Joi.string().min(5).max(256).required().label('内容'),
	};

	doSubmit = async () => {
		const postId = this.state.data.id;
		const { status, statusText } = await postsService.edit(postId, this.state.data);

		if (status === 200 || status === 201) {
			this.props.history.goBack();
		} else {
			this.handleError(status, statusText);

			return;
		}
	};

	render() {
		return (
			<div className="container">
				<h2>编辑文章</h2>
				{this.renderInput('标题', 'title')}
				{this.renderInput('内容', 'body')}
				{this.renderButton('保存')}
			</div>
		);
	}
}

export default EditPostForm;
