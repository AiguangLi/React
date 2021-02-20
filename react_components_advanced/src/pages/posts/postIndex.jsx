import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toast from '@/utils/toast.js';
import postsService from '@/services/postsService';
import Table from '@/components/common/table';

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
		const { data, status, statusText } = await postsService.listAll();
		if (status === 200 || status === 201) {
			this.setState({ posts: data });
		} else {
			this.handleError(status, statusText);
		}
	}

	handleDelete = async postId => {
		const { status, statusText } = await postsService.deletePost(postId);

		if (status === 200 || status === 201) {
			const posts = this.state.posts.filter(post => post.id !== postId);

			this.setState({ posts: posts });
		} else {
			this.handleError(status, statusText);
		}
	};

	handleSort = sortColumn => {
		console.log('sort');
	};

	handleError = (status, statusText) => {
		toast.showError(`出错了！错误代码：${status}，错误原因：${statusText}`);
	};

	render() {
		return <div className="container">{this.getRenderBody()}</div>;
	}

	getRenderBody = () => {
		const { posts, sortColumn } = this.state;
		return posts && posts.length > 0 ? (
			<React.Fragment>
				<div className="row my-2">
					<h3>文章列表</h3>
					<Link className="btn btn-primary ml-2" to="/posts/add">
						添加文章
					</Link>
				</div>

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
