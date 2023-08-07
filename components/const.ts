import type { Project } from '@/ui/Project';
import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon, TelegramIcon } from '@/ui/icons';

export interface Skill {
	type: string;
	description: string;
}

export interface Link {
	title: string;
	url: string;
	icon: () => JSX.Element;
}

export const PROJECTS: Project[] = [
	{
		title: 'Grid Dynamics',
		description: 'engineering company',
		role: 'User Interface Engineer',
		dates: 'jun 2021 – present',
		points: [
			'Contributed to the development of one of the biggest clothes shop, company focused on aligners production, American multinational home improvement retail corporation and internal project using Typescript, JavaScript, React, Redux, Ember and Node.js',
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
			"Led the development on two biggest bank companies' web application, utilizing React, Redux and Typescript to deliver robust and scalable solutions",
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

interface AdditionalItem {
	title: string;
	link?: string;
	bold?: boolean;
}

export interface Additional {
	name: string;
	items: AdditionalItem[];
}

export const ADDITIONAL: Additional[] = [
	{
		name: 'Languages',
		items: [
			{
				title: 'English (B2)',
				bold: true,
			},
			{
				title: 'Spanish (~A2)',
			},
			{
				title: 'Russian (native)',
			},
		],
	},
	{
		name: 'Udemy Courses',
		items: [
			{
				title: 'Node.JS',
				link: 'https://ude.my/UC-7c27bd0d-8d74-40c2-ad2c-c7fe033d300b',
			},
			{
				title: 'Node.JS + Mongo + GraphQL + Express + MySQL',
				link: 'https://ude.my/UC-d26bce27-203a-4605-bc55-7bb6b49f91c4',
				bold: true,
			},
			{
				title: 'NestJS',
				link: 'https://ude.my/UC-b0a39fe8-2502-4d9a-aa7e-527e3c87d7f0',
			},
			{
				title: 'Apollo GraphQL',
				link: 'https://www.apollographql.com/tutorials/certifications/995acb9d-9aae-431b-a882-3e3f0a2e8e7a',
			},
			{
				title: 'React + Next.js',
				link: 'https://ude.my/UC-252a2d36-5f14-41df-a93a-02d6bc4e2bef',
				bold: true,
			},
			{
				title: 'GoLang',
				link: 'https://ude.my/UC-e3899d5c-6bea-460e-89e6-745468715575',
				bold: true,
			},
		],
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

export const LINKS: Link[] = [
	{
		title: 'GitHub',
		url: 'https://github.com/holakirr',
		icon: GithubIcon,
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/holakirr/',
		icon: LinkedInIcon,
	},
	{
		title: 'Telegram',
		url: 'https://t.me/holakirr',
		icon: TelegramIcon,
	},
	{
		title: 'Email',
		url: 'mailto:kpetunin@proton.me',
		icon: MailIcon,
	},
	{
		title: 'Phone',
		url: 'tel:+523343469939',
		icon: PhoneIcon,
	},
];
