type ProjectPointProps = React.ComponentProps<"li">;

export const ProjectPoint = ({ children }: ProjectPointProps) => (
	<li className="list-item text-sm max-w-3xl">{children}</li>
);
