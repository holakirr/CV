import clsx from "clsx";
import {
	default as BaseLink,
	type LinkProps as BaseLinkProps,
} from "next/link";

export type LinkProps = BaseLinkProps & React.ComponentProps<"a">;

export const Link = ({ className, href, children }: LinkProps) => (
	<BaseLink
		href={href}
		className={clsx(
			"group transition-all text-orange-700 hover:text-red-700 visited:text-yellow-700 fill-orange-700 hover:fill-red-700 visited:fill-yellow-700 relative text-lg",
			className,
		)}
		target="_blank"
	>
		{children}
		<div className="transition-all absolute bottom-0 left-0 w-full h-0 group-hover:h-[1px] bg-orange-700" />
	</BaseLink>
);
