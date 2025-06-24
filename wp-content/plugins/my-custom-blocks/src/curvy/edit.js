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
import metadata from "./block.json";

import {
	useBlockProps,
	InspectorControls,
	RichText,
	getColorClassName,
} from "@wordpress/block-editor";
import {
	RangeControl,
	PanelBody,
	SelectControl,
	ToggleControl,
	HorizontalRule,
	ColorPalette,
} from "@wordpress/components";

import { Curve } from "../components/curve";

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
	// console.log("here: ", attributes);

	// console.log(useBlockProps());

	const { backgroundColor } = attributes;

	const { className, ...blockProps } = useBlockProps();
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{attributes.enableTopCurve && (
					<Curve
						height={attributes.topHeight}
						color={attributes.topColor}
						width={attributes.topWidth}
					/>
				)}
			</section>

			<InspectorControls>
				<PanelBody title={__("Top curve", metadata.textdomain)}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							onChange={(isChecked) => {
								// console.log("isChcked", isChecked);

								setAttributes({
									enableTopCurve: isChecked,
								});
							}}
							checked={attributes.enableTopCurve}
						/>
						<span>{__("Enble top curve", metadata.textdomain)}</span>
					</div>
					{attributes.enableTopCurve && (
						<>
							<HorizontalRule />
							<RangeControl
								min={100}
								max={300}
								value={attributes.topWidth || 100}
								onChange={(newValue) => {
									setAttributes({
										topWidth: parseInt(newValue),
									});
								}}
								label={__("width", metadata.textdomain)}
							/>
							<RangeControl
								min={0}
								max={200}
								value={attributes.topHeight}
								onChange={(newValue) => {
									setAttributes({
										topHeight: parseInt(newValue),
									});
								}}
								label={__("Height", metadata.textdomain)}
							/>
							<HorizontalRule />

							<div style={{ display: "flex" }}>
								<ToggleControl
									onChange={(isChecked) => {
										setAttributes({
											topFlipX: isChecked,
										});
									}}
									checked={attributes.topFlipX}
								/>
								<span>{__("Flip horizontally", metadata.textdomain)}</span>
							</div>
							<div style={{ display: "flex" }}>
								<ToggleControl
									onChange={(isChecked) => {
										// console.log("isChcked", isChecked);

										setAttributes({
											topFlipY: isChecked,
										});
									}}
									checked={attributes.topFlipY}
								/>
								<span>{__("Flip vertically", metadata.textdomain)}</span>
							</div>
							<HorizontalRule />
							<div>
								<label>
									{__("Curve Color", metadata.textdomain)}
									<ColorPalette
										disableCustomColors
										value={attributes.topColor}
										onChange={(newVal) => setAttributes({ topColor: newVal })}
									/>
								</label>
							</div>
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
