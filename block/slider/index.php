<?php
if(!class_exists("GBBlockSlider")){
	class GBBlockSlider {

		public function init(){
			add_action( 'init', [$this,'gutenform_block_init'] );
			add_action("wp_enqueue_scripts",[$this,"frontend_enqueue"]);
		}
		function gutenform_block_init() {
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			$dir = dirname( __FILE__ );

			$index_js = 'dist/main.min.js';
			$swiper_js = 'predist/swiper.min.js';
			
			$editor_css = 'dist/editor.min.css';
			$style_css = 'dist/style.min.css';
			$swiper_css = 'predist/swiper.min.css';

			wp_register_script(
				'block-slider-editor-script',
				plugins_url( $index_js, __FILE__ ),
				array(
					'wp-blocks',
					'wp-i18n',
					'wp-element',
				),
				filemtime( "$dir/$index_js" )
			);

			wp_register_script(
				'swiper-slider-script',
				plugins_url( $swiper_js, __FILE__ ),
				[],
				filemtime( "$dir/$swiper_js" )
			);

			wp_register_style(
				'swiper-slider-style',
				plugins_url( $swiper_css, __FILE__ ),
				[],
				filemtime( "$dir/$swiper_css" )
			);
			
			wp_register_style(
				'block-slider-editor-style',
				plugins_url( $editor_css, __FILE__ ),
				array(),
				filemtime( "$dir/$editor_css" )
			);

			wp_register_style(
				'block-slider-style',
				plugins_url( $style_css, __FILE__ ),
				array(),
				filemtime( "$dir/$style_css" )
			);

			register_block_type( 'block-slider/slider', array(
				'editor_script' => ['block-slider-editor-script','swiper-slider-script'],
				'editor_style'  => ['block-slider-editor-style','swiper-slider-style'],
				'style'         => 'block-slider-style',
			) );
		}		
		function frontend_enqueue(){
			wp_enqueue_script("swiperslider",plugin_dir_url( __FILE__ ) ."predist/swiper.min.js",[],filemtime( dirname(__FILE__) . '/predist/swiper.min.js' ));
			wp_enqueue_style("swiperslider",plugin_dir_url( __FILE__ ) ."predist/swiper.min.css",[],filemtime( dirname(__FILE__) . '/predist/swiper.min.css' ));
			wp_enqueue_script( 'block-slider-front', plugin_dir_url( __FILE__ ) . 'dist/front.min.js', [], filemtime( dirname(__FILE__) . '/dist/front.min.js' ), true );
		}
	}
}


