import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { Subtitle } from '.';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	subtitle: string;
}

export const Section = ({ subtitle, className, children }: SectionProps) => {
	return (
		<section className={clsx('p-4 md:p-6 xl:p-10 flex flex-col gap-4', className)}>
			<Subtitle className='mb-4'>{subtitle}</Subtitle>
			{/* Content */}
			<div className='flex flex-col gap-4 md:pl-2'>{children}</div>
		</section>
	);
};
