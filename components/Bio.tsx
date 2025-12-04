'use client'

import { useTranslate } from '@tolgee/react'
import { Body, Section } from '#/ui'

export const Bio = () => {
	const { t } = useTranslate()

	return (
		<Section title={t('profile.title')}>
			<Body>{t('profile.bio')}</Body>
		</Section>
	)
}
