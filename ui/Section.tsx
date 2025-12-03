import { TEXT_SIZES, Typography } from "@holakirr/snow-ui";
import clsx from "clsx";

type SectionProps = React.ComponentProps<"section"> & {
	title: string;
	tag?: "section" | "footer";
};

export const Section = ({ title, className, tag: Tag = "section", children }: SectionProps) => (
	<Tag className={clsx("flex flex-col gap-2", className)}>
		<Typography
			as="h2"
			size={TEXT_SIZES[18]}
			semibold
			className="uppercase tracking-widest text-black"
		>
			{title}
		</Typography>

		{/* Content */}
		{children}
	</Tag>
);
