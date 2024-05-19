type SubtitleProps = React.ComponentProps<"h2">;

export const Subtitle = ({ className, children }: SubtitleProps) => (
	<h2
		className={`font-bold text-xl text-orange-800 print:text-lg ${className}`}
	>
		{children}
	</h2>
);
