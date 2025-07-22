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
	BlockControls,
	InnerBlocks,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { select, useSelect } from "@wordpress/data";
import { Icon, image as img } from "@wordpress/icons";
import { ImageThumbnail } from "../components/imageThumbnail";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import metadata from "./block.json";
import { useState } from "@wordpress/element";
import { useImage } from "../hooks/useImage";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();
	const image = useImage(props.attributes.imageId);

	const imageSelected = !!props.attributes.imageId && !!image?.source_url;

	const [editMode, setEditMode] = useState(true);

	// console.log("imageSelected: ", !!imageSelected);

	return (
		<>
			<div {...blockProps}>
				{!!imageSelected && (
					<ImageThumbnail imageId={props.attributes.imageId} />
				)}

				{!imageSelected && (
					<div
						style={{
							position: "relative",
							height: 150,
							width: "100%",
							background: "white",
						}}
					>
						<Icon
							icon={img}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				)}

				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={["image"]}
						value={props.attributes.imageId}
						onSelect={(item) => {
							console.log("Selected image:", item);
							props.setAttributes({
								imageId: item.id,
							});
						}}
						render={({ open }) => {
							return (
								<button className="media-select" onClick={open}>
									{imageSelected
										? __("Replace Image", metadata.textdomain)
										: __("Select an Image", metadata.textdomain)}
								</button>
							);
						}}
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}
