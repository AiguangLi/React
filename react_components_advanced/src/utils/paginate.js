import _ from 'lodash';

const paginate = (items, page, pageSize) => {
	return _(items)
		.slice((page - 1) * pageSize)
		.take(pageSize)
		.value();
};

export default paginate;
