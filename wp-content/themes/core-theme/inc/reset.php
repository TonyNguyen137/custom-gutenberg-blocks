<?php
// removes the admin bar
add_filter('show_admin_bar', '__return_false');


//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' ); // Wordpress core
    wp_dequeue_style( 'wc-blocks-style' ); 
    wp_dequeue_style( 'global-styles' );

} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );


function prefix_remove_core_block_styles() {
	global $wp_styles;

	foreach ( $wp_styles->queue as $key => $handle ) {
		if ( strpos( $handle, 'wp-block-' ) === 0  || strpos( $handle, 'wp-emoji-' ) === 0   ) {
			wp_dequeue_style( $handle );
		}
	}
}
add_action( 'wp_enqueue_scripts', 'prefix_remove_core_block_styles' );



// remove weird inline style tag
// https://wordpress.org/support/topic/weird-style-code-in-my-website/
add_filter('wp_img_tag_add_auto_sizes', '__return_false');