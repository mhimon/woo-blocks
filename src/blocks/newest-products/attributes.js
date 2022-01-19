const attributes = {
	columns: {
		type: 'number',
		default: 3
	},
	rows: {
		type: 'number',
		default: 3
	},
	conVisibility: {
		type: 'object',
		default: {
			title: true,
			rating: true,
			price: true,
			button: true
		}
	}
};

export default attributes;
