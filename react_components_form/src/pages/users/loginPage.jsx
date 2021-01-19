import React, { Component } from 'react';

class LoginPage extends Component {
	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="container">
				<form onClick={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username" className="form-label">
							登录账号
						</label>
						<input
							autoFocus
							type="text"
							className="form-control"
							id="username"
							aria-describedby="usernameHelp"
						></input>
						<div id="usernameHelp" className="form-text">
							你的账号信息将会被妥善存储，不会泄露.
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input type="password" className="form-control" id="password"></input>
					</div>
					<button type="submit" className="btn btn-primary">
						登录
					</button>
				</form>
			</div>
		);
	}
}

export default LoginPage;
