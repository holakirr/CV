import { HTMLAttributes } from 'react';

interface ProjectPointProps extends HTMLAttributes<HTMLLIElement> {}

export const ProjectPoint = ({ children }: ProjectPointProps) => <li className='list-item text-sm max-w-3xl'>{children}</li>;
