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
	BlockControls,
	RichText,
	useBlockProps,
	LinkControl,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
} from "@wordpress/components";

import { link, edit } from "@wordpress/icons";
import { useState } from "react";

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
export default function Edit({ attributes, setAttributes }) {
	const [isLinkPickerVisible, setLinkPickerVisible] = useState(false);
	function buttonHandler() {
		setLinkPickerVisible((prev) => !prev);
	}

	function handleLinkChange(newLink) {
		setAttributes({
			link: newLink,
		});
	}

	const handleLinkRemove = () => {
		setAttributes({ link: null });
	};

	console.log(LinkControl);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon={link} label="link" onClick={buttonHandler} />
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				className="btn"
				allowedFormats={[]}
				tagName="a"
				value={attributes.text}
				onChange={(newValue) => setAttributes({ text: newValue })}
			/>
			{isLinkPickerVisible && (
				<Popover
					position="middle center"
					onFocusOutside={() => setLinkPickerVisible(false)}
				>
					<LinkControl
						value={attributes.link}
						onChange={handleLinkChange}
						settings={[]}
						showInitialSuggestions={true}
						suggestionsQuery={{
							type: "post",
							subtype: "page",
						}}
					/>
					{link && (
						<Button
							isSecondary
							isDestructive
							onClick={handleLinkRemove}
							style={{ marginTop: "10px" }}
						>
							🔗 Link entfernen
						</Button>
					)}
					<Button
						style={{ display: "block", width: "100%" }}
						variant="primary"
						onClick={() => setLinkPickerVisible(false)}
					>
						Confirm Link
					</Button>
				</Popover>
			)}
		</>
	);
}
