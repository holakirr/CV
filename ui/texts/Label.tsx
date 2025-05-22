"use client";
import { Text } from "@holakirr/snow-ui";
import clsx from "clsx";

type LabelProps = React.ComponentProps<"p">;

export const Label = ({ className, children }: LabelProps) => (
	<Text className={clsx("font-bold text-lg", className)}>{children}</Text>
);
