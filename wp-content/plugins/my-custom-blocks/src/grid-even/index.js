/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	save: () => {
		const blockProps = useBlockProps.save();
		const innerBlocksProps = useInnerBlocksProps.save(blockProps);
		return <div {...innerBlocksProps} />;
	},
	edit: Edit,
	icon: {
		src: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3 5C3 3.89543 3.89543 3 5 3H18.5C19.6046 3 20.5 3.89543 20.5 5V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H5C3.89543 20.5 3 19.6046 3 18.5V5ZM5 4.5H11V11H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5ZM4.5 12.5V18.5C4.5 18.7761 4.72386 19 5 19H11V12.5H4.5ZM12.5 12.5V19H18.5C18.7761 19 19 18.7761 19 18.5V12.5H12.5ZM12.5 4.5V11H19V5C19 4.72386 18.7761 4.5 18.5 4.5H12.5Z"
					fill="currentColor"
				/>
				<rect x="8" y="7" width="8" height="10" fill="white" />
				<path
					d="M9.67676 8.88281H13.6274V9.64746H10.5557V11.4492H12.8804V12.1875H10.5557V14.2266H13.6274V15H9.67676V8.88281Z"
					fill="black"
				/>
			</svg>
		),
	},
});
