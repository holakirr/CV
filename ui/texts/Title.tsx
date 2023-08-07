import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Title = ({ className, children }: TitleProps) => {
	return <h1 className={clsx('font-extrabold text-5xl print:text-3xl', className)}>{children}</h1>;
};
