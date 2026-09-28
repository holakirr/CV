import clsx from "clsx";

import MeImage from "#/public/me.jpeg";

/**
 * The portrait is a tight crop of a square photo; the design frames it as a
 * background (230% zoom, anchored at 48%/22%) so the same source works at
 * 96×120, 240×300 and 84×104 without three exports.
 */
export const Photo = ({ className }: { className?: string }) => (
	<div
		role="img"
		aria-label="Kirill Petunin"
		className={clsx("shrink-0 bg-no-repeat", className)}
		style={{
			backgroundImage: `url(${MeImage.src})`,
			backgroundSize: "230% auto",
			backgroundPosition: "48% 22%",
		}}
	/>
);
