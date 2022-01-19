<?php
/** بسم الله الرحمن الرحيم  **
 * Main Plugin File
 *
 * @package WooBlocks
 */

/**
 * Plugin Name:       Woo Blocks
 * Plugin URI:        https://ultradevs.com
 * Description:       WooBlocks
 * Version:           1.0.0
 * Author:            mhimon
 * Author URI:        https://ultradevs.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woo-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort!
defined( 'ABSPATH' ) || exit( 'bYe bYe!' );

// Constant.
define( 'WOO_BLOCKS_VERSION', '1.0.0' );
define( 'WOO_BLOCKS_NAME', plugin_basename( __FILE__ ) );
define( 'WOO_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'WOO_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'WOO_BLOCKS_ASSETS', WOO_BLOCKS_DIR_URL . 'assets/' );
define( 'WOO_BLOCKS_MENU_SLUG', 'woo-blocks' );

/**
 * Require Composer Autoload
 */
require_once WOO_BLOCKS_DIR_PATH . 'vendor/autoload.php';

/**
 * Woo Blocks class
 */
final class WooBlocks {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'init' ) );
		add_filter( 'block_categories', array( $this, 'register_block_category' ), 10, 2 );
		add_action( 'init', array( $this, 'load_text_domain' ) );
	}

	/**
	 * Begin execution of the plugin
	 *
	 * @return \WooBlocks
	 */
	public static function run() {
		/**
		 * Instance
		 *
		 * @var boolean
		 */
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		return $instance;
	}

	/**
	 * Plugin Init
	 */
	public function init() {

		// Assets Manager Class.
		$assets_manager = new MH\WB\Assets_Manager();

		// Blocks Class.
		$blocks = new MH\WB\Blocks();
		add_action( 'init', array( $blocks, 'reg_blocks' ) );

		if ( is_admin() ) {

			// Block Editor Assets.
			add_action( 'enqueue_block_editor_assets', array( $assets_manager, 'block_editor_assets' ) );

		} else {
			// Frontend Assets.
		}
	}

	/**
	 * Block Category
	 *
	 * @param array $categories Block Categories.
	 *
	 * @return array
	 */
	public function register_block_category( $categories ) {

		$categories = array_merge(
			$categories,
			array(
				array(
					'slug'  => 'woo-blocks',
					'title' => __( 'Woo Blocks', 'woo-blocks' ),
				),
			)
		);

		return $categories;
	}

	/**
	 * Loads a plugin’s translated strings.
	 *
	 * @return void
	 */
	public function load_text_domain() {
		load_plugin_textdomain( 'woo-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

}
/**
 * Check if woo_blocks doesn't exist
 */
if ( ! function_exists( 'woo_blocks' ) ) {
	/**
	 * Load Woo Blocks
	 *
	 * @return WooBlocks
	 */
	function woo_blocks() {
		return WooBlocks::run();
	}
}
woo_blocks();
