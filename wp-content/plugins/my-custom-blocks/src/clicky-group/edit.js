/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	BlockControls,
	JustifyContentControl,
	InspectorControls,
} from "@wordpress/block-editor";

import { useSelect } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { parsedValue } from "../utils/parsedValue";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockGap = parsedValue(attributes.style?.spacing?.blockGap || "");
	const blockProps = useBlockProps({
		style: {
			gap: blockGap,
			justifyContent: attributes.justifyContent,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["custom-blocks/clicky-button", {}]],
		allowedblocks: ["custom-blocks/clicky-button"],
	});

	return (
		<>
			<BlockControls>
				<JustifyContentControl
					allowedControls={["left", "center", "right"]}
					onChange={(newValue) => {
						setAttributes({ justifyContent: newValue });
					}}
					value={attributes.justifyContent}
				/>
			</BlockControls>

			<div {...innerBlocksProps}></div>
		</>
	);
}
