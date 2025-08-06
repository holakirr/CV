import { Typography } from "@holakirr/snow-ui";

type ProjectPointProps = React.ComponentProps<"li">;

export const ProjectPoint = ({ children }: ProjectPointProps) => (
	<li className="list-item text-sm max-w-3xl">
		<Typography>{children}</Typography>
	</li>
);
