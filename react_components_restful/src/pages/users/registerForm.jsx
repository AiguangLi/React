import React from 'react';
import { Redirect } from 'react-router-dom';

import Joi from 'joi';

import Form from '@/components/common/form';
import authService from '@/services/auth';

class RegisterForm extends Form {
	state = {
		data: { email: '', password: '', name: '' },
		errors: {},
	};

	// Joi 的新版本的tlds默认是true，即指定的域名后缀，可以这是为false，则不校验域名后缀
	validationSchema = {
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label('邮箱'),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
		name: Joi.string().min(2).required(),
	};

	doSubmit = async () => {
		const { data, statusText, status } = await authService.login(this.state.data);
		if (status === 200 || status === 201) {
			console.log(data);
			authService.saveJwt(data);
			window.location = '/';
		} else {
			this.handleError(status, statusText);
		}
	};

	render() {
		return authService.getCurrentUser() ? (
			<Redirect to="/" />
		) : (
			<div className="container">
				<h2>注册新用户</h2>
				{this.renderInput('邮箱', 'email')}
				{this.renderInput('密码', 'password', 'password')}
				{this.renderInput('称呼', 'name')}
				{this.renderButton('注册')}
			</div>
		);
	}
}

export default RegisterForm;
