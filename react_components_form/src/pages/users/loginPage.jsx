import React, { Component } from 'react';

import Input from '@/components/common/input';
import { TSObjectKeyword } from 'babel-types';

class LoginPage extends Component {
	state = {
		account: {
			username: '',
			password: '',
		},
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	handleOnChange = e => {
		const currentTarget = e.currentTarget;
		const { account } = this.state;
		account[currentTarget.name] = currentTarget.value;
		this.setState({ account });
	};

	render() {
		const { account } = this.state;
		return (
			<div className="container">
				<form onClick={this.handleSubmit}>
					<Input
						label="账号"
						name="username"
						value={account.username}
						type="text"
						onChange={this.handleOnChange}
					/>
					<Input
						label="密码"
						name="password"
						value={account.password}
						type="password"
						onChange={this.handleOnChange}
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
