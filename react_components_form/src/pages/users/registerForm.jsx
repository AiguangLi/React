import React, { Component } from 'react';
import Joi from 'joi';

import Form from '@/components/common/form';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '', nickname: '' },
		errors: {},
	};

	// Joi 的新版本的tlds默认是true，即指定的域名后缀，可以这是为false，则不校验域名后缀
	validationSchema = {
		username: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.required()
			.label('邮箱'),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
		nickname: Joi.string().min(2).required(),
	};

	doSubmit = () => {};

	render() {
		return (
			<div className="container">
				<h2>注册新用户</h2>
				{this.renderInput('邮箱', 'username')}
				{this.renderInput('密码', 'password', 'password')}
				{this.renderInput('昵称', 'nickname')}
				{this.renderButton('注册')}
			</div>
		);
	}
}

export default RegisterForm;
