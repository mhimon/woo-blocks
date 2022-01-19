<?php
/**
 * Functions here
 *
 * @package WooBlocks
 */

/**
 * Var Dump with Pre
 *
 * @param mixed $data Data to dump.
 * @return void
 */
function ud_vd( $data ) {
	echo '<pre>';
	var_dump( $data );
	echo '</pre>';
}

/**
 * Undocumented function
 *
 * @param [type] $attr
 * @param [type] $product
 * @return void
 */
function woo_b_get_title( $attr, $product ) {

	// if ( empty( $attr['conVisibility']['title'] ) ) {
	// 	return;
	// }

	return '<div class="wc-block-grid__product-title">' . $product->get_title() . empty( $attr['conVisibility']['title'] ) . ' </div>';
}
