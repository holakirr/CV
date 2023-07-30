import { HTMLAttributes } from 'react';

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Subtitle = ({ children }: SubtitleProps) => {
	return <h4 className='font-bold text-xl'>{children}</h4>;
};
