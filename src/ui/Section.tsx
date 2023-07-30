import { HTMLAttributes } from 'react';
import { Subtitle } from '.';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	subtitle: string;
}

export const Section = ({ subtitle, children }: SectionProps) => {
	return (
		<section className='p-4 flex flex-col gap-4'>
			<Subtitle className='mb-4'>{subtitle}</Subtitle>
			{/* Content */}
			<div className='flex flex-col gap-4 md:pl-2'>{children}</div>
		</section>
	);
};
