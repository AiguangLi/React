import React from 'react';
import Joi from 'joi';

import postsService from '@/services/postsService';
import Form from '@/components/common/form';

class AddPostForm extends Form {
	state = {
		data: {
			title: '',
			body: '',
		},
		errors: {},
	};

	validationSchema = {
		title: Joi.string().min(2).max(128).required().label('标题'),
		body: Joi.string().min(5).max(256).required().label('内容'),
	};

	doSubmit = async () => {
		const { status, statusText } = await postsService.add(this.state.data);
		if (status === 200 || status === 201) {
			this.props.history.goBack();
		} else {
			console.log('Error: ', statusText);

			return;
		}
	};

	render() {
		return (
			<div className="container">
				<h2>添加文章</h2>
				{this.renderInput('标题', 'title')}
				{this.renderInput('内容', 'body')}
				{this.renderButton('提交')}
			</div>
		);
	}
}

export default AddPostForm;
