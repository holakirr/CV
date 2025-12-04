'use client'

import { useTranslate } from '@tolgee/react'
import { Body, Section } from '#/ui'
import { TECH_STACK } from './const'

export const Technologies = () => {
	const { t } = useTranslate()

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
