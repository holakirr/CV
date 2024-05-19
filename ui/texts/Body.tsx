import clsx from "clsx";

type BodyProps = React.ComponentProps<"span">;

export const Body = ({ className, children }: BodyProps) => (
	<span className={clsx("font-normal text-base", className)}>{children}</span>
);
