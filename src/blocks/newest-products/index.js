import { __ } from '@wordpress/i18n';

import './editor.scss';

import attributes from './attributes';
import example from './example';
import edit from './edit';

const name = 'woo-blocks/newest-products';

const settings = {
	title: __( 'Woo Newest Products', 'woo-blocks' ),
	description: __(
		'Woo Newest Products',
	),
	icon: 'star-filled',

	supports: {
		html: false,
		align: [ 'wide', 'full' ],
	},
	keywords: [
		'Woo Newest Products',
	],

	attributes,

	edit,

	save() {
		return null;
	},

	example,
};

export { name, settings };
