import React, { Component } from 'react';
import indexStyle from '@/css/index.scss';

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

	getHeader = column => {
		return column.sort ? (
			<th
				key={column.field}
				onClick={() => this.raiseSort(column.field)}
				className={indexStyle.clickable}
			>
				{column.label} {this.getSortIcon(column)}
			</th>
		) : (
			<th key={column.field}>{column.label}</th>
		);
	};

	getSortIcon = column => {
		const { sortColumn } = this.props;
		if (column.field === sortColumn.field) {
			if (sortColumn.direction === 'asc') return <i className="fa fa-sort-asc"></i>;
			return <i className="fa fa-sort-desc"></i>;
		}

		return null;
	};

	render() {
		return (
			<thead>
				<tr>{this.props.columns.map(column => this.getHeader(column))}</tr>
			</thead>
		);
	}
}

export default TableHeader;
