import { default as BaseLink, LinkProps as BaseLinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

type LinkProps = BaseLinkProps & HTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children }: LinkProps) => {
	return (
		<BaseLink
			href={href}
			className='transition-all text-orange-400 hover:text-red-400 hover:underline visited:text-yellow-400'
		>
			{children}
		</BaseLink>
	);
};
