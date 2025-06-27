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
import apiFetch from "@wordpress/api-fetch";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

import { Button, PanelBody, PanelRow } from "@wordpress/components";
import metadata from "./block.json";

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
	// console.log("wp: ", wp);

	useEffect(
		function () {
			async function go() {
				const response = await apiFetch({
					path: `/wp/v2/media/${attributes.videoID}`,
					method: "GET",
				});
				console.log("response ", response);

				setAttributes({
					videoURL: response.source_url,
					mimeType: response.mime_type,
					videoName: response.slug,
				});
			}
			go();
		},
		[attributes.videoID],
	);

	function onFileSelect(x) {
		console.log("x: ", x);
		setAttributes({
			videoID: x.id,
		});
	}

	function handleDelete() {
		setAttributes({
			videoID: null,
			videoURL: null,
			videoName: null,
			mimeType: null,
		});
	}

	// console.log("test");

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Video Hintergrund", metadata.textdomain)}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onFileSelect}
							value={attributes.imgID}
							render={({ open }) => {
								return (
									<div
										style={{
											display: "flex",
											flexWrap: "wrap",
											gap: "8px",
											alignItems: "center",
										}}
									>
										{attributes.videoID && (
											<span
												style={{
													width: "100%",
													textDecoration: "underline",
													flexShrink: 0,
												}}
											>
												{attributes.videoName}
											</span>
										)}

										<Button onClick={open} variant="primary">
											{__("video auswählen", metadata.textdomain)}
										</Button>
										{attributes.videoID && (
											<button onClick={handleDelete}>X</button>
										)}
									</div>
								);
							}}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps({ className: "hero" })}>
				{attributes.videoID && (
					<video playsinline autoplay loop muted>
						<source src={attributes.videoURL} type={attributes.mimeType} />
						Your browser does not support the video tag.
					</video>
				)}
				<InnerBlocks />
			</section>
		</>
	);
}
