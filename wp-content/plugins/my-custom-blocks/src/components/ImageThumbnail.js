import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const image = useImage(props.imageId);

	console.log("props: ", props);

	return image?.source_url ? (
		<img
			style={{
				display: "inlineBlock",
				objectFit: "cover",
				height: props.height || 150,
				width: "100%",
				pointerEvents: "visible",
			}}
			className={props.className}
			onClick={props.onClick}
			src={image.source_url}
		/>
	) : null;
};
