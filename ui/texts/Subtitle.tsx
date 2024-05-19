import { HTMLAttributes } from "react";

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Subtitle = ({ className, children }: SubtitleProps) => (
	<h2
		className={`font-bold text-xl text-orange-800 print:text-lg ${className}`}
	>
		{children}
	</h2>
);
