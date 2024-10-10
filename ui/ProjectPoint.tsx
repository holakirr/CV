"use client";
import { Text } from "holakirr-snow-ui";

type ProjectPointProps = React.ComponentProps<"li">;

export const ProjectPoint = ({ children }: ProjectPointProps) => (
	<li className="list-item text-sm max-w-3xl">
		<Text>{children}</Text>
	</li>
);
