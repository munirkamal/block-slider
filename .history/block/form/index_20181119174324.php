<?php
if(class_exists("GBBlockSlider")){
	class GBBlockSlider {
		function init(){

		}
	}
}


function gutenform_block_init() {
	

}
add_action( 'init', 'gutenform_block_init' );


function admin_enqueue(){
	wp_enqueue_script("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js"	);
	wp_enqueue_style("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/css/swiper.min.css");
}

function frontend_enqueue(){
	
	wp_enqueue_script("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js"	);
	wp_enqueue_style("swiperslider","https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/css/swiper.min.css");
	wp_enqueue_script( 'block-slider-front', plugin_dir_url( __FILE__ ) . 'dist/front.min.js', [], filemtime( dirname(__FILE__) . '/dist/front.min.js' ), true );
}

add_action("wp_enqueue_scripts","frontend_enqueue");