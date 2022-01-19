const { RichText, InnerBlocks, MediaUpload } = wp.blockEditor;
import ServerSideRender from '@wordpress/server-side-render';
const { __ } = wp.i18n;
import classnames from 'classnames';
import { Disabled } from '@wordpress/components';

import Inspector from './inspector';

import './editor.scss';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		columns,
		rows,
		categories,
		conVisibility,
	} = attributes;

	console.log( conVisibility );


	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<div
				className={ classnames(
					'wb-newest-products-wrapper',
					props.className,
				) }
			>
				<Disabled>
					<ServerSideRender
						block="woo-blocks/newest-products"
						attributes={ attributes }
					/>
				</Disabled>
			</div>
		</>
	);
};

export default edit;
