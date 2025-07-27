import {
	registerFormatType,
	applyFormat,
	removeFormat,
	toggleFormat,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton, ColorPalette } from "@wordpress/block-editor";
import "./style.scss";
import { useState } from "@wordpress/element";
import { Popover, PanelBody } from "@wordpress/components";

registerFormatType("custom-blocks/low-highlight", {
	title: __("low-highlight", "custom-blocks"),
	tagName: "span",
	className: "cb-low-highlight",
	edit: ({ onChange, value, contentRef }) => {
		const [showColors, setShowColors] = useState(false);
		return (
			<>
				<RichTextToolbarButton
					icon={<div>test</div>}
					title={__("Low highlight", "custom-blocks")}
					onClick={() => {
						setShowColors(true);
						// console.log("value: ", value);

						// onChange(
						// 	toggleFormat(value, {
						// 		type: "custom-blocks/low-highlight",
						// 	}),
						// );
					}}
				/>

				{!!showColors && (
					<Popover
						anchor={contentRef?.current}
						onClose={() => {
							showColors(false);
						}}
					>
						<PanelBody>
							<ColorPalette
								colors={[
									{ name: "Red", color: "#f00" },
									{ name: "Green", color: "#0f0" },
									{ name: "Blue", color: "#00f" },
								]}
								onChange={(newVal) => {
									if (newVal) {
										onChange(
											applyFormat(value, {
												type: "custom-blocks/low-highlight",
												attributes: {
													style: `background:${newValue}`,
												},
											}),
										);
									} else {
										removeFormat(
											toggleFormat(value, "custom-blocks/low-highlight"),
										);
									}
								}}
							/>
						</PanelBody>
					</Popover>
				)}
			</>
		);
	},
});
