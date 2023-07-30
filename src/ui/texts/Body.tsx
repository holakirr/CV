import { HTMLAttributes } from 'react';

interface BodyProps extends HTMLAttributes<HTMLSpanElement> {}

export const Body = ({ children }: BodyProps) => {
	return <span className='font-normal text-base'>{children}</span>;
};
