import { HTMLAttributes } from 'react';
import { Body, Label, ProjectPoint } from '.';

export interface Project {
	title: string;
	description: string;
	role: string;
	dates: string;
	points: string[];
}

type ProjectProps = HTMLAttributes<HTMLDivElement> & Project;

export const Project = ({ title, role, description, dates, points }: ProjectProps) => (
	<div className='flex flex-col gap-1'>
		{/* Head */}
		<div className='flex flex-col md:flex-row justify-between'>
			<div className='flex flex-col md:flex-row md:items-baseline md:gap-2'>
				<div className='flex flex-col md:flex-row md:gap-1'>
					<Label>{title}</Label>
					<Label>({description})</Label>
				</div>
				<Body className='hidden md:block'>&#8212;</Body>
				<Body>{role}</Body>
			</div>
			<Body className='uppercase font-extralight text-slate-500'>{dates}</Body>
		</div>
		<ul className='flex flex-col gap-1 list-disc pl-4 md:pl-6'>
			{points.map((point, index) => (
				<ProjectPoint key={index}>{point}</ProjectPoint>
			))}
		</ul>
	</div>
);
