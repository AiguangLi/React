import React from 'react';
import TableHeader from '@/components/common/tableHeader';
import TableBody from '@/components/common/tableBody';

const Table = props => {
	const { onSort, sortColumn, columns, items, fields, keyField } = props;
	return (
		<table className="table">
			<TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
			<TableBody items={items} fields={fields} keyField={keyField} />
		</table>
	);
};

export default Table;
