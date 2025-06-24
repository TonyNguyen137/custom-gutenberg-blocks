<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<section <?php echo get_block_wrapper_attributes([ 'class' => 'hero' ] ); ?>>
	<div class="container">
			<?php echo $content; ?>
		</div>
</section>