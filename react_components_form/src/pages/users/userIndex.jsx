import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import SideBar from '@/components/common/sideBar';

import UserInfo from './userInfo';
import UserLiked from './userLiked';

class UserIndex extends Component {
	userPagesRoute = [
		{ path: this.props.match.url + '/info', name: '个人信息' },
		{ path: this.props.match.url + '/liked', name: '个人收藏' },
	];
	render() {
		const { url } = this.props.match;
		return (
			<div>
				<h3>User Index</h3>
				<div className="container-fluid">
					<div className="row">
						<SideBar items={this.userPagesRoute} activeItem={this.userPagesRoute[0]} />
					</div>
				</div>
				<Route path={url + '/info'}>
					<UserInfo />
				</Route>
				<Route path={url + '/liked'}>
					<UserLiked />
				</Route>
			</div>
		);
	}
}

export default UserIndex;
