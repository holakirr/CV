"use client";
import { TEXT_SIZES, Text } from "@holakirr/snow-ui";
import clsx from "clsx";

type SectionProps = React.ComponentProps<"section"> & {
	subtitle: string;
	tag?: "section" | "footer";
};

export const Section = ({
	subtitle,
	className,
	tag: Tag = "section",
	children,
}: SectionProps) => (
	<Tag
		className={clsx(
			"p-4 md:p-6 xl:p-10 flex flex-col gap-4 print:p-2 print:md:p-2 print:xl:p-2 print:gap-2 container mx-auto",
			className,
		)}
	>
		<Text as="h2" size={TEXT_SIZES[24]} semibold className="mb-4 print:mb-2">
			{subtitle}
		</Text>
		{/* Content */}
		<div className="flex flex-col gap-4 md:px-2">{children}</div>
	</Tag>
);
