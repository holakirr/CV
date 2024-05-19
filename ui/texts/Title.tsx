import clsx from "clsx";

type TitleProps = React.ComponentProps<"h1">;

export const Title = ({ className, children }: TitleProps) => (
	<h1 className={clsx("font-extrabold text-5xl print:text-3xl", className)}>
		{children}
	</h1>
);
