import { TEXT_SIZES, Typography } from "@holakirr/snow-ui";

type BodyProps = React.ComponentProps<"span">;

export const Body = ({ className, children }: BodyProps) => (
	<Typography as="span" className={className} size={TEXT_SIZES[16]}>
		{children}
	</Typography>
);
