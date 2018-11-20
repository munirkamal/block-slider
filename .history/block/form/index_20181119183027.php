<?php
if(!class_exists("GBBlockSlider")){
	class GBBlockSlider {

		public function init(){
			add_action( 'init', [$this,'gutenform_block_init'] );
			add_action("admin_enqueue_scripts",[$this,"admin_enqueue"]);
			add_action("wp_enqueue_scripts",[$this,"frontend_enqueue"]);
		}
		function gutenform_block_init() {
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
		}

		function admin_enqueue(){
			wp_enqueue_script("swiperslider",plugin_dir_url( __FILE__ ) ."dist/swiper.min.js"	);
			wp_enqueue_style("swiperslider",plugin_dir_url( __FILE__ ) ."dist/swiper.min.css");
		}
		
		function frontend_enqueue(){
			
			wp_enqueue_script("swiperslider",plugin_dir_url( __FILE__ ) ."dist/swiper.min.js"	);
			wp_enqueue_style("swiperslider",plugin_dir_url( __FILE__ ) ."dist/swiper.min.css");
			wp_enqueue_script( 'block-slider-front', plugin_dir_url( __FILE__ ) . 'dist/front.min.js', [], filemtime( dirname(__FILE__) . '/dist/front.min.js' ), true );
		}


		

	}
}


