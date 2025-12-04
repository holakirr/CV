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

/** @uses messages:
 * t('jobs.projects[0].title')
 * t('jobs.projects[0].role')
 * t('jobs.projects[0].points[0]')
 * t('jobs.projects[0].points[1]')
 * t('jobs.projects[0].points[2]')
 *
 * t('jobs.projects[1].title')
 * t('jobs.projects[1].role')
 * t('jobs.projects[1].points[0]')
 * t('jobs.projects[1].points[1]')
 * t('jobs.projects[1].points[2]')
 *
 * t('jobs.projects[2].title')
 * t('jobs.projects[2].role')
 * t('jobs.projects[2].points[0]')
 * t('jobs.projects[2].points[1]')
 * t('jobs.projects[2].points[2]')
 *
 * t('jobs.projects[3].title')
 * t('jobs.projects[3].role')
 * t('jobs.projects[3].points[0]')
 * t('jobs.projects[3].points[1]')
 * t('jobs.projects[3].points[2]')
 *
 * t('jobs.projects[4].title')
 * t('jobs.projects[4].role')
 * t('jobs.projects[4].points[0]')
 * t('jobs.projects[4].points[1]')
 * t('jobs.projects[4].points[2]')
 */
export const PROJECTS: Project[] = [
	{
		start: new Date(2018, 8),
		end: new Date(2020, 1),
	},
	{
		start: new Date(2020, 1),
		end: new Date(2020, 8),
	},
	{
		start: new Date(2020, 8),
		end: new Date(2021, 5),
	},
	{
		start: new Date(2021, 5),
		end: new Date(2024, 7),
	},
	{
		start: new Date(2024, 10),
		end: undefined,
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
