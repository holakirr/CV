import { getTranslate } from '#/tolgee/server'
import { Body, Section } from '#/ui'
import { TECH_STACK } from './const'

export const Technologies = async () => {
	const t = await getTranslate()

	return (
		<Section title={t('stack.title')} className="print:mt-8">
			{TECH_STACK.map(item => (
				<div key={item.type} className="flex flex-col print:flex-row">
					<Body className="underline underline-offset-4">{item.type}:</Body>
					<Body className="pl-2">{item.description}</Body>
				</div>
			))}
		</Section>
	)
}
