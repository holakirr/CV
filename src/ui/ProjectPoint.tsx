import { HTMLAttributes } from 'react';

interface ProjectPointProps extends HTMLAttributes<HTMLLIElement> {}

export const ProjectPoint = ({ children }: ProjectPointProps) => {
	return <li className='list-item text-sm'>{children}</li>;
};
