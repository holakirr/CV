import { Project } from '@/ui/Project';
import { AdditionalItem } from './Additional';
import { Skill } from './Skills';

export const PROJECTS: Project[] = [
	{
		title: 'Grid Dynamics',
		description: 'engineering company',
		role: 'User Interface Engineer',
		dates: 'jun 2021 – present',
		points: [
			'Contributed to the development of American Eagle, Align, The Home Depot and internal project using Typescript, JavaScript, React, Redux, Ember and Node.js',
			'Collaborated with cross-functional teams to define requirements, design system architectures, and implement scalable solutions',
			'Played a key role in troubleshooting and resolving technical issues, ensuring the smooth operation of software applications',
			'Mentored and onboarded junior team members, providing guidance and support to foster their professional growth',
		],
	},
	{
		title: 'Globus-IT',
		description: 'engineering company',
		role: 'Frontend Developer',
		dates: 'sep 2020 – jun 2021',
		points: [
			'Led the development of GazpromBank internal application and Sberbank web application, utilizing React, Redux and Typescript to deliver robust and scalable solutions',
			'Collaborated closely with product managers, designers, and other stakeholders to understand requirements and translate them into technical specifications',
			'Implemented code optimization, performance tuning, and security considerations',
		],
	},
	{
		title: 'Chitai Gorod',
		description: 'online bookstore',
		role: 'Frontend Developer',
		dates: 'feb 2020 – sep 2020',
		points: [
			'Gained hands-on experience as a software engineer in a fast-paced Chitai Gorod',
			'Collaborated with the team to develop new payment method using JavaScript and HTML and other features',
			'Assisted in requirements gathering and implementation, contributing to the successful delivery',
			'Gained proficiency in JavaScript through practical application and self-directed learning',
		],
	},
	{
		title: 'Rerise',
		description: 'marketing agency',
		role: 'Web Developer',
		dates: 'sep 2018 – feb 2020',
		points: [
			'Clarifying requirements with stakeholders',
			'Developing functionality: from specifications review and coding to deployment',
			'Managing all processes to create web-site for client from the scratch',
			'Writing JavaScrip, CSS and pre-compilers (SCSS, Sass), HTML and PHP',
		],
	},
];

export const ADDITIONAL: AdditionalItem[] = [
	{
		name: 'Languages',
		description: 'English (B2), Spanish (~A2), Russian (native)',
	},
	{
		name: 'Udemy Courses',
		description: 'Node.js, Mongo, GraphQL, MySQL, Express, NestJS, React+Next.js, Apollo GraphQL',
	},
];

export const SKILLS: Skill[] = [
	{
		type: 'Advanced',
		description: 'HTML+CSS+JavaScript, React+REDUX, Typescript, Tailwind, SASS, Webpack, git',
	},
	{
		type: 'Intermediate',
		description: 'Node.js, Express, NestJS, MongoDB, MySQL, GraphQL, Apollo, Next.js, Ember.js',
	},
];
