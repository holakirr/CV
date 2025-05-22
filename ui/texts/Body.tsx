"use client";
import { TEXT_SIZES, Text } from "@holakirr/snow-ui";

type BodyProps = React.ComponentProps<"span">;

export const Body = ({ className, children }: BodyProps) => (
	<Text as="span" className={className} size={TEXT_SIZES[16]}>
		{children}
	</Text>
);
