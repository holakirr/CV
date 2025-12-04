import type { JSX } from 'react'

import {
	GithubIcon,
	InstagramIcon,
	LinkedInIcon,
	TelegramIcon,
} from '#/ui/icons'
import type { Project } from '#/ui/Project'

export interface Technology {
	type: string
	description: string
}

export interface Link {
	title: string
	url: string
	icon: ({ ...props }) => JSX.Element
}

export const CONTACTS = {
	phone: '+79956727623',
	mail: 'kpetunin@icloud.com',
	website: 'holakirr.com',
}

export const PROJECTS: Project[] = [
	{
		title: 'Rerise',
		role: 'Web Developer',
		start: new Date(2018, 8),
		end: new Date(2020, 1),
		points: [
			'Clarified requirements with stakeholders',
			'Managed all processes to create web-site for client from the scratch',
			'Worked with JavaScript, CSS and pre-compilers (SCSS, Sass), HTML and PHP',
		],
	},
	{
		title: 'Chitai Gorod',
		role: 'Frontend Developer',
		start: new Date(2020, 1),
		end: new Date(2020, 8),
		points: [
			'Collaborated with the team to develop new payment method using JavaScript and HTML and other features',
			'Assisted in requirements gathering and implementation, contributing to the successful delivery',
			'Gained proficiency in JavaScript through practical application and self-directed learning',
		],
	},
	{
		title: 'Globus-IT',
		role: 'Frontend Developer',
		start: new Date(2020, 8),
		end: new Date(2021, 5),
		points: [
			"Led the development on two biggest bank companies' web application, utilizing React, Redux and Typescript to deliver robust and scalable solutions",
			'Collaborated closely with product managers, designers, and other stakeholders to understand requirements and translate them into technical specifications',
			'Implemented code optimization, performance tuning, and security considerations',
		],
	},
	{
		title: 'Grid Dynamics',
		role: 'Software Engineer / Team Lead',
		start: new Date(2021, 5),
		end: new Date(2024, 7),
		points: [
			'Contributed to the development of different big companies and internal projects using Typescript, JavaScript, React, Redux, Ember.js, Java and Node.js.',
			'Led the development of some projects.',
			'Collaborated with cross-functional teams to define requirements, design system architectures, and implement scalable solutions.',
			'Played a key role in troubleshooting and resolving technical issues, ensuring the smooth operation of software applications.',
			'Mentored and onboarded junior team members, providing guidance and support to foster their professional growth.',
		],
	},
	{
		title: 'T1 Innotech',
		role: 'Software Engineer',
		start: new Date(2024, 10),
		end: undefined,
		points: [
			'Development and maintenance of cryptocurrency project using modern stack: React, Remix, Nest.js, Node.js',
			'Extracted part of monolithic application into microservice (BFF and frontend components), improving architectural scalability',
			'Ensured high code quality and adherence to best practices within the team',
		],
	},
]

interface Skill {
	title: string
	link: string
}

export const CERTIFICATIONS: Skill[] = [
	{
		title: 'Node.JS',
		link: 'https://ude.my/UC-7c27bd0d-8d74-40c2-ad2c-c7fe033d300b',
	},
	{
		title: 'Node.JS + Mongo + GraphQL + Express + MySQL',
		link: 'https://ude.my/UC-d26bce27-203a-4605-bc55-7bb6b49f91c4',
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
	},
	{
		title: 'GoLang',
		link: 'https://ude.my/UC-e3899d5c-6bea-460e-89e6-745468715575',
	},
]

export const TECH_STACK: Technology[] = [
	{
		type: 'Frontend',
		description:
			'TypeScript, JavaScript (ES6+), Remix, Ember.js, Next.js, React, HTML5, CSS3, TailwindCSS, Styled Components',
	},
	{
		type: 'Backend',
		description:
			'Node.js, Nest.js, Express.js, REST API, GraphQL, Microservices',
	},
	{
		type: 'Tools',
		description: 'Git, Docker, Webpack, Vite, Bun, CI/CD, GitHub Actions',
	},
	{
		type: 'Testing',
		description: 'Vitest, React Testing Library, Playwright, Jest',
	},
	{
		type: 'Soft',
		description: 'Agile, Scrum, Code Review, Mentoring',
	},
]

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
		title: 'Instagram',
		url: 'https://instagram.com/holakirr',
		icon: InstagramIcon,
	},
]
