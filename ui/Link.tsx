import clsx from 'clsx';
import { default as BaseLink, LinkProps as BaseLinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

export type LinkProps = BaseLinkProps & HTMLAttributes<HTMLAnchorElement>;

export const Link = ({ className, href, children }: LinkProps) => {
	return (
		<BaseLink
			href={href}
			className={clsx(
				'transition-all text-orange-700 hover:text-red-700 hover:underline visited:text-yellow-700 fill-orange-700 hover:fill-red-700 visited:fill-yellow-700',
				className,
			)}
			target='_blank'
		>
			{children}
		</BaseLink>
	);
};
