# Custom Gutenberg Blocks

https://www.youtube.com/watch?v=TtmdYbHKDL0&t=745s

## usefull courses

https://learn.wordpress.org/lesson/make-the-block-interactive/

## create plugin folder

https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/

npx @wordpress/create-block@latest
follow instructions

## create additional Block

cd to ./src
npx @wordpress/create-block@latest --no-plugin

## block.json supports

https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/

## block.json attribute

https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/

## block.json example key

https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#example-optional

## @wordpress/components

https://developer.wordpress.org/block-editor/reference-guides/components/

## @wordpress/block-editor

https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/

## Core Blocks Reference

https://developer.wordpress.org/block-editor/reference-guides/core-blocks/

## about Edit()

https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-in-the-editor/

## render.php

https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render

## some usefull hooks

### load dash icons

wp_enqueue_style("dashicons")

### load assets in editor

add_action("enque_block_assets", function)

### Load custom CSS into Gutenberg block editor iframe
add_action( 'after_setup_theme', function () {
    add_editor_style(  '/public/custom-editor.wbpgs.min.css' );
});



## @wordpress/icons
https://wordpress.github.io/gutenberg/?path=/docs/icons-icon--default
