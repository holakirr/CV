import { Typography } from "@holakirr/snow-ui";
import clsx from "clsx";

type LabelProps = React.ComponentProps<"p">;

export const Label = ({ className, children }: LabelProps) => (
	<Typography className={clsx("font-bold text-lg", className)}>{children}</Typography>
);
