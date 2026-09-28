import clsx from "clsx";

type SectionTitleProps = React.ComponentProps<"h2">;

/** An orange bar and a small-caps label — the one section marker of the 1a design. */
export const SectionTitle = ({ className, children, ...rest }: SectionTitleProps) => (
	<div className={clsx("flex items-center gap-3 lg:gap-3.5 print:gap-2", className)}>
		<span
			aria-hidden
			className="h-1.5 w-6 shrink-0 bg-orange-500 lg:h-2 lg:w-8 print:h-[5px] print:w-5"
		/>
		<h2
			className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-gray-500 lg:text-[13px] print:text-[11px] print:tracking-[0.1em] print:text-gray-900"
			{...rest}
		>
			{children}
		</h2>
	</div>
);

type SectionProps = React.ComponentProps<"section"> & { title: string };

export const Section = ({ title, className, children, ...rest }: SectionProps) => (
	<section
		className={clsx("px-5 pt-9 lg:px-[72px] lg:pt-12 print:px-12 print:pt-4", className)}
		{...rest}
	>
		<SectionTitle className="mb-4 lg:mb-5 print:mb-2">{title}</SectionTitle>

		{children}
	</section>
);
