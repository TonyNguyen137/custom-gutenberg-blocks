<?php
// This file is generated. Do not modify it manually.
return array(
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-blocks/button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'widgets',
		'icon' => 'button',
		'description' => 'a custom Button Block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Button'
			),
			'size' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'link' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'clicky-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-blocks/clicky-button',
		'version' => '0.1.0',
		'title' => 'a clicky button',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'nice cliyk button',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => false,
				'gradients' => true,
				'enableContrastChecker' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkedPost' => array(
				'type' => 'number'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => '#000',
						'text' => '#fff'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '15px',
							'bottom' => '15px',
							'left' => '15px',
							'right' => '15px'
						)
					)
				)
			),
			'text' => array(
				'type' => 'string',
				'default' => 'button text'
			)
		),
		'parent' => array(
			'custom-blocks/clicky-group'
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'clicky-group' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-blocks/clicky-group',
		'version' => '0.1.0',
		'title' => 'Clicky Group',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'a nice group block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true
		),
		'attributes' => array(
			
		),
		'allowedBlocks' => array(
			'custom-blocks/clicky-button'
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php'
	),
	'container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cb/container',
		'version' => '0.0.1',
		'title' => 'Container',
		'category' => 'custom-blocks',
		'icon' => 'smiley',
		'description' => 'a simple block',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'level' => 3,
						'content' => 'Heading'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lectus non interdum cursus, arcu sapien mollis lacus, et tincidunt odio nisi ut purus. Duis eleifend, magna placerat faucibus tincidunt, orci nulla ornare tortor, eget egestas tortor nunc quis sem. Cras in tortor justo. Nulla consectetur leo vel blandit consectetur.Fusce quis sapien ante. Vestibulum non varius augue, et ultricies urna. Integer hendrerit suscipit nibh.'
					)
				)
			)
		),
		'supports' => array(
			'html' => true,
			'anchor' => true
		),
		'attributes' => array(
			'anchor' => array(
				'type' => 'string'
			)
		),
		'styles' => array(
			array(
				'name' => 'sm',
				'label' => 'SM'
			),
			array(
				'name' => 'md',
				'label' => 'MD'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'curvy' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-block/curvy',
		'version' => '0.1.0',
		'title' => 'Curvy',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'a curvy block',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Heading'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'This is an example curvy block'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => true
			),
			'spacing' => array(
				'padding' => true
			)
		),
		'variations' => array(
			array(
				'name' => 'top-only',
				'title' => 'Curcy - top only',
				'attributes' => array(
					'enableBottomCurve' => false,
					'enableTopCurve' => true
				)
			)
		),
		'attributes' => array(
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'background' => 'var(--wp--preset--color--dark-blue)'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '80px',
							'bottom' => '50px',
							'left' => '50px',
							'right' => '80px'
						)
					)
				)
			),
			'enableTopCurve' => array(
				'type' => 'boolean',
				'default' => true
			),
			'topWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'topHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'topFlipX' => array(
				'type' => 'boolean',
				'default' => 'false'
			),
			'topFlipY' => array(
				'type' => 'boolean',
				'default' => 'false'
			),
			'topColor' => array(
				'type' => 'string',
				'default' => '#fff'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'grid-even' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cb/grid-even',
		'version' => '0.1.0',
		'title' => 'Grid Even Columns',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A responsive grid block that lets the user determine the number of columns at specific media query breakpoints.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'gridClasses' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'defaultColumnNumber' => array(
				'type' => 'number',
				'default' => 1
			),
			'enableSmBreakpoint' => array(
				'type' => 'boolean',
				'default' => false
			),
			'smColumnNumber' => array(
				'type' => 'number',
				'default' => null
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cb/hero',
		'version' => '0.1.0',
		'title' => 'Hero',
		'category' => 'widgets',
		'icon' => 'superhero',
		'description' => 'a hero block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'full'
			)
		),
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'videoName' => array(
				'type' => 'string'
			),
			'videoID' => array(
				'type' => 'number'
			),
			'videoURL' => array(
				'type' => 'string'
			),
			'mimeType' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'leaflet-map' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-blocks/leaflet-map',
		'version' => '0.1.0',
		'title' => 'Map',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'map',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'link' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wb/link',
		'version' => '0.1.0',
		'title' => 'link',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'link',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'multi-columns' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-block/multi-columns',
		'version' => '0.1.0',
		'title' => 'Multi Columns',
		'category' => 'custom-blocks',
		'icon' => 'columns',
		'description' => '...',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'level' => 3,
						'content' => 'Heading'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lectus non interdum cursus, arcu sapien mollis lacus, et tincidunt odio nisi ut purus. Duis eleifend, magna placerat faucibus tincidunt, orci nulla ornare tortor, eget egestas tortor nunc quis sem. Cras in tortor justo. Nulla consectetur leo vel blandit consectetur.Fusce quis sapien ante. Vestibulum non varius augue, et ultricies urna. Integer hendrerit suscipit nibh.'
					)
				),
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'level' => 4,
						'content' => 'Sub-heading'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vestibulum mauris diam. Praesent semper diam a efficitur iaculis. Nullam lacinia augue quis lorem accumsan tempus.'
					)
				)
			),
			'attributes' => array(
				'columnCount' => 2,
				'columnWidth' => 80
			),
			'viewportWidth' => 720
		),
		'parent' => array(
			'core/post-content'
		),
		'supports' => array(
			'html' => true,
			'color' => array(
				'__experimentalDefaultControls' => array(
					'color' => false
				)
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'__experimentalDefaultControls' => array(
					'margin' => false,
					'padding' => false
				)
			),
			'anchor' => true,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => false
				)
			),
			'layout' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'dropCapSize' => array(
				'type' => 'object',
				'default' => array(
					'size' => 'small',
					'fontSize' => '3.8rem',
					'lineHeight' => '3.5rem'
				)
			),
			'dropCapColor' => array(
				'type' => 'string',
				'default' => '#b8b8b8'
			),
			'columnCount' => array(
				'type' => 'integer',
				'default' => 4
			),
			'columnWidth' => array(
				'type' => 'integer',
				'default' => 200
			),
			'columnGap' => array(
				'type' => 'integer',
				'default' => 40
			),
			'columnRuleStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'columnRuleWidth' => array(
				'type' => 'integer',
				'default' => 1
			),
			'columnRuleColor' => array(
				'type' => 'string',
				'default' => '#b8b8b8'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'text' => 'var(--clr-black)',
						'background' => '#fbf9f4'
					)
				)
			)
		),
		'styles' => array(
			array(
				'name' => 'default',
				'label' => 'Default',
				'isDefault' => true
			),
			array(
				'name' => 'drop-cap',
				'label' => 'Drop-Cap'
			)
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'my-reading-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-block/my-reading-list',
		'version' => '0.1.0',
		'title' => 'My Reading List',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-reading-list',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'piccy-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-blocks/piccy-gallery',
		'version' => '0.1.0',
		'title' => 'Gallery',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'very nice gallery',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => array(
			'file:./style-index.css'
		),
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'piccy-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-block/piccy-image',
		'version' => '0.1.0',
		'title' => 'Piccy Image',
		'category' => 'widgets',
		'icon' => 'format-image',
		'description' => 'nice image',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number'
			)
		),
		'parent' => array(
			'custom-blocks/piccy-gallery'
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'test-link' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-block/test-link',
		'version' => '0.1.0',
		'title' => 'test link',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'nice link',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'wrapper' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cb/wrapper',
		'version' => '0.1.0',
		'title' => 'Wrapper',
		'category' => 'custom-blocks',
		'icon' => 'smiley',
		'description' => 'A wrapper block that allows the user to select the HTML element—such as <section>, <header>, <main>, <article>, <footer>, <aside>, or <div>—to group and organize related content semantically.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'my-custom-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
