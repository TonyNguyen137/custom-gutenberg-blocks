<?php

  $block_wrapper_attributes = get_block_wrapper_attributes();
  $post_uri = "#";

  if($attributes["linkedPost"] ?? null) {
    $post_uri = get_permalink($attributes["linkedPost"]);
  }

?>


<a href="<?= $post_uri ?>" <?= get_block_wrapper_attributes() ?>>
  <?= $attributes["text"]; ?>
</a>