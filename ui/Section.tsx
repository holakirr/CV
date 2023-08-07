import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { Subtitle } from '.';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	subtitle: string;
	tag?: 'section' | 'footer';
}

export const Section = ({ subtitle, className, tag: Tag = 'section', children }: SectionProps) => (
	<section className={clsx('p-4 md:p-6 xl:p-10 flex flex-col gap-4 print:p-2 print:md:p-2 print:xl:p-2', className)}>
		<Subtitle className='mb-4'>{subtitle}</Subtitle>
		{/* Content */}
		<div className='flex flex-col gap-4 md:px-2'>{children}</div>
	</section>
);
