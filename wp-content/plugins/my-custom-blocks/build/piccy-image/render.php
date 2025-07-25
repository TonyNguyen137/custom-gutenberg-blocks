<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$block_wrapper_attributes = get_block_wrapper_attributes();
$image_url = wp_get_attachment_image_url($attributes["imageId"]);

// wp_send_json($block_wrapper_attributes);

?>

<div <?php echo $block_wrapper_attributes;?> >
	<img class="thumb" src="<?php echo $image_url; ?>"/>
</div>

