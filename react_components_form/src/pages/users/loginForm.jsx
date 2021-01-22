import React from 'react';
import Joi from 'joi';

import Form from '@/components/common/form';
class LoginForm extends Form {
	state = {
		data: {
			username: '',
			password: '',
		},
		errors: {},
	};

	validationSchema = {
		username: Joi.string().min(3).max(32).required().label('账号'),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).label('密码'),
	};
	//.message('账号长度3-32个字符')
	//.message('密码只能是数字或字母的组合，至少6位')

	doSubmit = () => {
		console.log('Submitted');
	};

	render() {
		return (
			<div className="container">
				<h2>登录</h2>
				<form className="needs-validation" onSubmit={this.handleSubmit}>
					{this.renderInput('账号', 'username')}
					{this.renderInput('密码', 'password', 'password')}
					{this.renderButton('登录')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
