import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '@/components/common/table';
import httpService from '@/services/httpService';
import config from '@/config/config.json';

class PostIndex extends Component {
	state = { posts: [], sortColumn: { field: 'id', direction: 'asc' } };

	columns = [
		{ field: 'id', label: '编号', sort: true },
		{ field: 'title', label: '标题', sort: true },
		// { field: 'body', label: '内容', sort: true },
		{ field: 'operation', label: '操作', sort: false },
	];

	postFields = [
		{ name: 'id', prefixLabel: '', suffixLabel: '', type: 'field' },
		{
			name: 'name',
			prefixLabel: '',
			suffixLabel: '',
			type: 'operation',
			content: posts => <Link to={'/posts/' + posts.id}>{posts['title']}</Link>,
		},
		// { name: 'body', prefixLabel: '', suffixLabel: '', type: 'field' },

		{
			name: 'operation',
			type: 'operation',
			content: posts => (
				<div>
					<Link to={`/posts/edit/${posts.id}`} className="btn btn-sm btn-primary">
						编辑
					</Link>
					<button
						className="ml-2 btn btn-sm btn-danger"
						onClick={() => {
							this.handleDelete(posts.id);
						}}
					>
						删除
					</button>
				</div>
			),
		},
	];

	async componentDidMount() {
		try {
			const { data } = await httpService.get(config.postHost);
			this.setState({ posts: data });
		} catch (ex) {
			console.log(ex);
		}
	}

	handleDelete = postsId => {
		console.log('posts delete');
	};

	handleSort = sortColumn => {
		console.log('sort');
	};

	render() {
		const { posts, sortColumn } = this.state;
		return <div className="container">{this.getRenderBody()}</div>;
	}

	getRenderBody = () => {
		const { posts, sortColumn } = this.state;
		return posts && posts.length > 0 ? (
			<React.Fragment>
				<h3>文章列表</h3>
				<Table
					onSort={this.handleSort}
					sortColumn={sortColumn}
					columns={this.columns}
					items={posts}
					fields={this.postFields}
					keyField={'id'}
				/>
			</React.Fragment>
		) : (
			<p className="m-8">文章为空</p>
		);
	};
}

export default PostIndex;
