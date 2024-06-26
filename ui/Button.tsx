export const Button = ({ children, ...props }: React.ComponentProps<"a">) => (
	<a
		className="transition-all block py-4 px-12 border-2 border-black bg-black text-white w-fit hover:bg-transparent hover:text-black"
		{...props}
	>
		{children}
	</a>
);
