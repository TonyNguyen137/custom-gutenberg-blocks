<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$text = $attributes['text'];
$url =  isset($attributes["link"]) ? $attributes["link"]["url"] : '#';
?>


<a href="<?= $url ?>" class="btn">
	<span><?php echo esc_html( $text ); ?></span>
</a>