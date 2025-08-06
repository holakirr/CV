import { TEXT_SIZES, Typography } from "@holakirr/snow-ui";
import clsx from "clsx";

type SectionProps = React.ComponentProps<"section"> & {
	subtitle: string;
	tag?: "section" | "footer";
};

export const Section = ({ subtitle, className, tag: Tag = "section", children }: SectionProps) => (
	<Tag
		className={clsx(
			"p-4 md:p-6 xl:p-10 flex flex-col gap-4 print:p-1 print:md:p-1 print:xl:p-1 print:gap-2 container mx-auto",
			className
		)}
	>
		<Typography as="h2" size={TEXT_SIZES[24]} semibold className="mb-4 print:mb-0">
			{subtitle}
		</Typography>
		{/* Content */}
		<div className="flex flex-col gap-4 md:px-2">{children}</div>
	</Tag>
);
