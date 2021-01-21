import React, { Component } from 'react';
import Joi from 'joi';

import Input from '@/components/common/input';

class LoginPage extends Component {
	state = {
		account: {
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
	handleSubmit = e => {
		e.preventDefault();
		const error = this.validate();

		this.setState({
			errors: error || {},
		});

		console.log('Submitted');
	};

	validate = () => {
		const { account } = this.state;
		const options = {
			abortEarly: false,
		};
		const { error } = Joi.object(this.validationSchema).validate(account, options);
		if (!error) return null;

		const errors = {};
		for (let item of error.details) {
			errors[item.path[0]] = item.message;
		}

		return errors;
	};

	//校验单个字段
	validateProperty = ({ name, value }) => {
		const property = { [name]: value };
		const options = { abortEarly: true };
		const schema = { [name]: this.validationSchema[name] };
		const { error } = Joi.object(schema).validate(property, options);

		return error ? error.details[0].message : null;
	};

	handleOnChange = ({ currentTarget: input }) => {
		const { account, errors } = this.state;
		account[input.name] = input.value;
		const error = this.validateProperty(input);
		if (error) errors[input.name] = error;
		else delete errors[input.name];

		this.setState({ account, errors });
	};

	render() {
		const { account, errors } = this.state;
		return (
			<div className="container">
				<form className="needs-validation" onSubmit={this.handleSubmit}>
					<Input
						label="账号"
						name="username"
						value={account.username}
						type="text"
						onChange={this.handleOnChange}
						error={errors.username}
					/>
					<Input
						label="密码"
						name="password"
						value={account.password}
						type="password"
						onChange={this.handleOnChange}
						error={errors.password}
					/>

					<button type="submit" className="btn btn-primary">
						登录
					</button>
				</form>
			</div>
		);
	}
}

export default LoginPage;
