import { HTMLAttributes } from 'react';

interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Subtitle = ({ children }: SubtitleProps) => {
	return <h2 className='font-bold text-xl text-orange-800'>{children}</h2>;
};
