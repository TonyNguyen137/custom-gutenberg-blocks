<?php 
$includes = glob(get_template_directory() . '/inc/*.php');
// echo '<pre>';
// var_dump($includes);
// echo '</pre>';
foreach ($includes as $file) {
    require_once $file;
}


// add_filter( 'wp_calculate_image_srcset', 'my_custom_srcset_filter', 10, 5 );

// function my_custom_srcset_filter( $sources, $size_array, $image_src, $image_meta, $attachment_id ) {
//     // Example: remove very large sizes

// vdump($sources);

//     foreach ( $sources as $width => $source ) {
//         if ( $width > 1600 ) {
//             unset( $sources[ $width ] );
//         }
//     }
//     return $sources;
// }