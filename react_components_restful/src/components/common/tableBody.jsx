import React from 'react';

const TableBody = props => {
	const { items, fields, keyField } = props;
	return (
		<tbody>
			{items.map(item => {
				return (
					<tr key={item[keyField]}>
						{fields.map(field => (
							<td key={item[keyField] + '-' + field.name}>
								{field.type == 'field'
									? field.prefixLabel + item[field.name] + field.suffixLabel
									: field.content(item)}
							</td>
						))}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
