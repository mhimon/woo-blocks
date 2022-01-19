<?php
/**
 * Assets Manager Class
 *
 * @package WooBlocks
 * @since 1.0.0
 */

namespace MH\WB;

/**
 * Manage All Assets
 *
 * This class is for managing Assets
 *
 * @package WooBlocks
 * @since 1.0.0
 */
class Assets_Manager {

	/**
	 * Block Editor Assets
	 *
	 * Enqueue Frontend Styles and Scripts
	 */
	public function block_editor_assets() {

		wp_enqueue_style( 'wb-block-editor', WOO_BLOCKS_ASSETS . 'css/wb-blocks-editor.css', array( 'wp-edit-blocks' ), WOO_BLOCKS_VERSION );
		wp_enqueue_script( 'wb-block-editor', WOO_BLOCKS_ASSETS . 'js/wb-blocks-editor.js', array( 'wp-blocks', 'wp-components', 'wp-compose', 'wp-i18n', 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-polyfill', 'wp-editor', 'wp-api-fetch' ), WOO_BLOCKS_VERSION, true );

	}
}
