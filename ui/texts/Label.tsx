"use client";
import clsx from "clsx";
import { Text } from "holakirr-snow-ui";

type LabelProps = React.ComponentProps<"p">;

export const Label = ({ className, children }: LabelProps) => (
	<Text className={clsx("font-bold text-lg", className)}>{children}</Text>
);
