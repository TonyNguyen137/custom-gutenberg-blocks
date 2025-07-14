<?php
 /**
 *
 * @var string $attributes['anchor'] - The ID attribute value or empty string if not set.
 */


//  var_dump($attributes);

$wrapper_attributes = get_block_wrapper_attributes(
	! empty( $attributes['anchor'] ) ? [ 'id' => $attributes['anchor'] ] : []
);

?>
	<?php echo $content; ?>

