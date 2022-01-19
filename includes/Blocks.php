<?php
/**
 * Blocks Class
 *
 * @package WooBlocks
 * @since 1.0.0
 */

namespace MH\WB;

/**
 * Blocks Class
 *
 * @package WooBlocks
 * @since 1.0.0
 */
class Blocks {

	/**
	 * Register Blocks
	 *
	 * @return void
	 */
	public function reg_blocks() {

		register_block_type(
			'woo-blocks/newest-products',
			array(
				'attributes'      => array(
					'align'         => array(
						'type'    => 'string',
						'default' => '',
					),
					'columns'       => array(
						'type'    => 'number',
						'default' => 3,
					),
					'rows'          => array(
						'type'    => 'number',
						'default' => 3,
					),
					'conVisibility' => array(
						'type'    => 'object',
						'default' => array(
							'title'  => true,
							'rating' => true,
							'price'  => true,
							'button' => true,
						),
					),
				),
				'render_callback' => array( $this, 'render_block' ),
			)
		);
	}

	/**
	 * Block Render
	 *
	 * @param array  $attributes Block Attributes.
	 * @param string $contents Block Contents.
	 * @return string
	 */
	public function render_block( $attributes, $contents ) {

		$columns           = $attributes['columns'];
		$rows              = $attributes['rows'];
		$con_visibility    = $attributes['conVisibility'];
		$products_per_page = intval( $columns ) * intval( $rows );

		$product_args = array(
			'post_type'           => 'product',
			'post_status'         => 'publish',
			'fields'              => 'ids',
			'ignore_sticky_posts' => true,
			'no_found_rows'       => false,
			'orderby'             => 'date',
			'order'               => 'DESC',
			'tax_query'           => array(),
			'posts_per_page'      => $products_per_page,
		);

		$products = new \WP_Query( $product_args );

		$classes = array(
			'wb-newest-products',
			'wc-block-grid',
			"has-{$columns}-columns",
		);

		$content  = '<div class="' . implode( ' ', $classes ) . '">';
		$content .= '<ul class="wc-block-grid__products">';

		while ( $products->have_posts() ) {
			$products->the_post();

			$product = wc_get_product( get_the_ID() );

			$content .= '<li class="wc-block-grid__product">';
			$content .= '<a href="' . get_the_permalink() . '" class="wc-block-grid__product-link">';
			$content .= '<div class="wc-block-grid__product-image">';
			$content .= get_the_post_thumbnail( get_the_ID(), 'woocommerce_thumbnail' );
			$content .= '</div>';

			// $content .= '<b>' . isset( $con_visibility['title'] ) ? 'T' : 'F' . '</b>';
			if ( $con_visibility['title'] ) {
				$content .= '<div class="wc-block-grid__product-title">';
				$content .= wp_kses_post( $product->get_title() );
				$content .= '</div>';
			}
			$content .= '</a>';
			if ( $con_visibility['price'] && $product->is_on_sale() ) {
				$content .= '<div class="wc-block-grid__product-onsale">';
				$content .= '<span>' . esc_html__( 'Sale', 'woo-blocks' ) . '</span>';
				$content .= '<span class="screen-reader-text">' . esc_html__( 'Product On Sale', 'woo-blocks' ) . '</span>';
				$content .= '</div>';
			}
			if ( $con_visibility['price'] ) {
				$content .= '<div class="wc-block-grid__product-price price">';
				$content .= wp_kses_post( $product->get_price_html() );
				$content .= '</div>';
			}
			if ( $con_visibility['rating'] ) {

				$rating_count = $product->get_rating_count();
				$average      = $product->get_average_rating();

				$content .= sprintf(
					'<div class="wc-block-grid__product-rating">%s</div>',
					wc_get_rating_html( $average, $rating_count ) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				);
			}
			if ( $con_visibility['button'] ) {
				ob_start();
				woocommerce_template_loop_add_to_cart();
				$add_to_cart = ob_get_clean();
				$content    .= '<div class="wp-block-button wc-block-grid__product-add-to-cart">' . $add_to_cart . '</div>';
			}
			$content .= '</li>';
		}

		$content .= '</ul>';
		$content .= '</div>';

		return $content;
	}
}
