import { getTranslate } from '#/tolgee/server'
import { Project, Section } from '#/ui'
import { PROJECTS } from './const'

export const Jobs = async () => {
	const t = await getTranslate()

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
