export function parsedValue(value) {
	if (value.indexOf("var:") === 0) {
		const varValue = value.split(":")[1].split("|").join("--");

		return `var(--wp--${varValue})`;
	}

	return value;
}
