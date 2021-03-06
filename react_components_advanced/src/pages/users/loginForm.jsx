import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi';

import authService from '@/services/auth';
import Form from '@/components/common/form';
class LoginForm extends Form {
	state = {
		data: {
			email: '',
			password: '',
		},
		errors: {},
	};

	validationSchema = {
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label('邮箱'),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).label('密码'),
	};

	doSubmit = async () => {
		const { data, status } = await authService.login(this.state.data);
		if (status === 200 || status === 201) {
			authService.saveJwt(data);

			const { state } = this.props.location;
			window.location = state ? state.from.pathname : '/';
		} else {
			this.handleError(status, data);
		}
	};

	render() {
		return authService.getCurrentUser() ? (
			<Redirect to="/" />
		) : (
			<div className="container">
				<h2>登录</h2>
				<form className="needs-validation" onSubmit={this.handleSubmit}>
					{this.renderInput('邮箱', 'email')}
					{this.renderInput('密码', 'password', 'password')}
					{this.renderButton('登录')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
