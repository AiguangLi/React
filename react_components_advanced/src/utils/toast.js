import { toast } from 'react-toastify';

function showError(message) {
	toast.error(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

function showInfo(message) {
	toast.info(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

function showSuccess(message) {
	toast.info(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

function show(message) {
	toast(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

export default {
	showError,
	showInfo,
	showSuccess,
	show,
};
