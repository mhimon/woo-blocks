import { registerBlockType } from '@wordpress/blocks';

import * as newestProducts from './blocks/newest-products';

const category = 'woo-blocks';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;

    registerBlockType( name, {
        category: category,
        ...settings,
    } );
};

/**
 * Function to register blocks.
 */
const registerWooBlocks = () => {
	[
		newestProducts
	].forEach( registerBlock );
};

registerWooBlocks();
