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
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";
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

// const books = [
// 	{
// 		title: "The Fellowship of the Ring",
// 		content:
// 			"When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.",
// 		featured_image: "https://picsum.photos/360/240",
// 	},
// 	{
// 		title: "The Two Towers",
// 		content:
// 			"Frodo and Sam lay side by side, peering through the ferns. The path was now almost due west, and it went gently downwards. The sun was shining brightly, and the grass under the fluttering wind-flags was sweet and soft, as if it had been mown.",
// 		featured_image: "https://picsum.photos/360/240",
// 	},
// 	{
// 		title: "The Return of the King",
// 		content:
// 			"Pippin looked out from the shelter of Gandalf's cloak. He wondered if he was awake or still sleeping, still in the swift-moving dream in which he had been wrapped so long since the great ride began. The dark world was rushing by and the wind sang loudly in his ears.",
// 		featured_image: "https://picsum.photos/360/240",
// 	},
// ];

export default function Edit() {
	const books = useSelect(
		(select) => select(coreDataStore).getEntityRecords("postType", "book"),
		[],
	);

	console.log("books: ", books);

	if (!books) {
		return (
			<div {...useBlockProps()}>
				<p>
					{__("My Reading List – hello from the editor!", "my-reading-list")}
				</p>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<p>{__("My Reading List – hello from the editor!", "my-reading-list")}</p>
			{books.map((book) => (
				<div>
					<h2>{book.title.rendered}</h2>
					<img src={book.featured_image_src} />

					<div
						dangerouslySetInnerHTML={{ __html: book.content.rendered }}
					></div>
				</div>
			))}
		</div>
	);
}
