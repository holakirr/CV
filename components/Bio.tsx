import { getTranslate } from '#/tolgee/server'
import { Body, Section } from '#/ui'

export const Bio = async () => {
	const t = await getTranslate()

	return (
		<Section title={t('profile.title')}>
			<Body>{t('profile.bio')}</Body>
		</Section>
	)
}
