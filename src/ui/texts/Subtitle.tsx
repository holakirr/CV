import { HTMLAttributes } from 'react';

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Subtitle = ({ children }: SubtitleProps) => {
	return <h4 className='font-bold text-xl text-orange-300'>{children}</h4>;
};
