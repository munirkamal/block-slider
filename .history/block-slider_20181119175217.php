<?php
/**
 * Plugin Name: WordPress Slider Plugin - Block Slider
 * Plugin URI: http://www.wpblockslider.com
 * Description: The slider plugin for WordPress Gutenberg editor. Build sliders directly within Gutenberg editor live. Add any WordPress blocks to each slide.
 * Author: munirkamal
 * Author URI: https://munirkamal.wordpress.com/
 * Version: 1.0.0
 * License: GPL
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! defined( 'BS_DIR' ) ) {
	define( 'BS_DIR', WP_PLUGIN_DIR . '/' . dirname( plugin_basename( __FILE__ ) ) );
}

require_once( BS_DIR . "/block/form/index.php" );
$init = new GBBlockSlider();
$init