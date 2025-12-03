import { TEXT_SIZES, type TextProps, Typography } from "@holakirr/snow-ui";

export const Body = ({ className, children, as }: TextProps) => (
	<Typography as={as} className={className} size={TEXT_SIZES[14]}>
		{children}
	</Typography>
);
