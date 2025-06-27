<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
    // wp_send_json($attributes);
		// $videoID   = $attributes['videoID'] ?? null;
		$video_URL  = $attributes['videoURL'] ?? '';
		$mime_type = $attributes['mimeType'] ?? '';
	?>


<section <?php echo get_block_wrapper_attributes([ 'class' => 'hero' ] ); ?>>
				<?php if(!empty($video_URL)) :?>
					<video loop>
						<source src="<?= $video_URL ?>" type="<?= $mime_type ?>">
					</video>
				<?php endif; ?>
				<?php echo $content; ?>
</section>