'use client'

import { useTranslate } from '@tolgee/react'
import { Project, Section } from '#/ui'
import { PROJECTS } from './const'

export const Jobs = () => {
	const { t } = useTranslate()

	return (
		<Section title={t('jobs.title')}>
			<div className="flex flex-col gap-2">
				{PROJECTS.map((project, id) => (
					<Project key={project.start.toString()} index={id} {...project} />
				)).reverse()}
			</div>
		</Section>
	)
}
