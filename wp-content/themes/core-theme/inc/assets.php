<?php
/**
 * Enque shared CSS for both frontend and editor. 
*/
add_action( 'enqueue_block_assets', function() {
    $css_version_number = filemtime(get_stylesheet_directory() . '/public/style.min.css');

    wp_enqueue_style('custom-css', get_stylesheet_directory_uri() . '/public/style.min.css', null, $css_version_number);

    // wp_enqueue_style(
	// 	'custom-global-css',
	// 	get_template_directory_uri() . '/public/style.min.css',
	// 	array(),
	// 	wp_get_theme()->get( 'Version' )
	// );
});







