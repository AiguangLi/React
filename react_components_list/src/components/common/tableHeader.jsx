import React, { Component } from 'react';

// columns: 表头数组，如果不显示表头，则使用空对象
//    columns元素属性：field - 列字段名称， label - 表头名称
// sortColumn：当前排序列对象，包括： field = 排序字段名， direction = asc 或 desc
// onSort： 父组件排序处理方法
class TableHeader extends Component {
	raiseSort = sortField => {
		let sortColumn = this.props.sortColumn;
		if (sortField === sortColumn.field) {
			sortColumn.direction = sortColumn.direction === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn = { field: sortField, direction: 'asc' };
		}
		this.props.onSort(sortColumn);
	};

	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(column =>
						column.field ? (
							<th
								onClick={() => this.raiseSort(column.field)}
								style={{ cursor: 'pointer' }}
							>
								{column.label}
							</th>
						) : (
							<th>{column.label}</th>
						)
					)}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
