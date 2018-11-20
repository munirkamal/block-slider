<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package gutenform
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function gutenform_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'dist/main.min.js';
	$editor_css = 'dist/editor.min.css';
	$style_css = 'dist/style.min.css';
	wp_register_script(
		'gutenform-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);
	wp_register_style(
		'gutenform-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);
	wp_register_style(
		'gutenform-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'gutenform/gutenform', array(
		'editor_script' => 'gutenform-block-editor',
		'editor_style'  => 'gutenform-block-editor',
		'style'         => 'gutenform-block',
	) );

	add_action("admin_enqueue_scripts","admin_enqueue");

}
add_action( 'init', 'gutenform_block_init' );


function admin_enqueue(){
	wp_enqueue_script("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js"	);
	wp_enqueue_style("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/css/swiper.min.css");
}

function frontend_enqueue(){
	wp_enqueue_script( 'front', plugin_dir_url( __FILE__ ) . 'dist/front.min.js', array( 'jquery' ), filemtime( GBF_BLOCK_DIR . 'dist/front.min.js' ), true );
}

add_action("wp_enqueue_scripts","admin_enqueue");