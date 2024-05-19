import clsx from "clsx";

type LabelProps = React.ComponentProps<"p"> & {};

export const Label = ({ className, children }: LabelProps) => (
	<p className={clsx("font-bold text-lg", className)}>{children}</p>
);
