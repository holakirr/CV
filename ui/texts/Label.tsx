import clsx from "clsx";
import { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Label = ({ className, children }: LabelProps) => (
	<p className={clsx("font-bold text-lg", className)}>{children}</p>
);
