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
	LinkControl,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [link, setLink] = useState({
		url: "",
		opensInNewTab: false,
	});
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<LinkControl
						value={link}
						settings={[
							{
								id: "opensInNewTab",
								title: "In neuem Tab öffnen",
							},
						]}
						searchInputPlaceholder="URL oder Titel eingeben"
						onChange={(newLink) => {
							console.log("🎯 Link ausgewählt:", newLink);
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()}>
				{__("test link – hello from the editor!!!!", "custom-blocks")}
			</p>
		</>
	);
}
