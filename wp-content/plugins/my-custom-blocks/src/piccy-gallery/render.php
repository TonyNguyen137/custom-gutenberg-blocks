<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

  $block_wrapper_attributes = get_block_wrapper_attributes();

?>

<div <?php echo $block_wrapper_attributes;?>>
  <div class="gallery-thumbnails">
    <?php echo $content; ?>
  </div>
  <div>
    <img src="" alt="" class="image-preview">
  </div>
</div>
