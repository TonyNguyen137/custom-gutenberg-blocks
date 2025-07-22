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
	useInnerBlocksProps,
	BlockControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import metadata from "./block.json";
import { useState } from "@wordpress/element";
import { select, useSelect } from "@wordpress/data";
import { ImageThumbnail } from "../components/imageThumbnail";
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

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "piccy-gallery-inner-blocks",
		},
		{
			allowedBlocks: ["custom-blocks/piccy-image"],
		},
	);

	const [editMode, setEditMode] = useState(true);

	const iconMode = editMode ? "welcome-view-site" : "edit";
	const label = editMode ? "preview gallery" : "edit gallery";

	const innerBlocks = useSelect(
		(select) => {
			const { getBlocksByClientId } = select("core/block-editor");
			const block = getBlocksByClientId(props.clientId)?.[0];

			return block?.innerBlocks;
		},
		[props.clientId],
	);

	const [previewModeImage, setPreviewModeImage] = useState({
		imageId: innerBlocks?.[0]?.attributes?.imageId,
		blockId: innerBlocks?.[0]?.clientId,
	});

	console.log("previewModeImage: ", previewModeImage);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={<Icon icon={iconMode} />}
						label={__(label, metadata.textdomain)}
						onClick={() => setEditMode((val) => !val)}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				{editMode && (
					<div className="edit-mode">
						<span className="piccy-label">
							{__("Piccy image gallery", metadata.textdomain)}
						</span>
						<div {...innerBlocksProps} />
					</div>
				)}

				{!editMode && (
					<>
						<div className="preview-mode">
							{(innerBlocks || []).map((item) => {
								console.log("item: ", item);

								return (
									<ImageThumbnail
										className={`thumb ${
											item.clientId === previewModeImage.blockId
												? "selected"
												: ""
										}`}
										key={item.clientId}
										height={75}
										onClick={(e) => {
											setPreviewModeImage({
												imageId: item.attributes.imageId,
												blockId: item.clientId,
											});
										}}
										imageId={item.attributes.imageId}
									/>
								);
							})}
						</div>
						<div>
							<ImageThumbnail
								height={"initial"}
								imageId={previewModeImage?.imageId}
							/>
						</div>
					</>
				)}
			</div>
		</>
	);
}
