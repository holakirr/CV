import clsx from "clsx";
import { HTMLAttributes } from "react";

interface BodyProps extends HTMLAttributes<HTMLSpanElement> {}

export const Body = ({ className, children }: BodyProps) => (
	<span className={clsx("font-normal text-base", className)}>{children}</span>
);
