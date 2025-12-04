import { Link } from '@holakirr/snow-ui'
import { getTranslate } from '#/tolgee/server'
import { Body, Section } from '#/ui'
import { LINKS } from './const'

export const Contacts = async () => {
	const t = await getTranslate()

	return (
		<Section tag="footer" title={t('social.title')}>
			<ul className="flex flex-col gap-1">
				{LINKS.map(link => (
					<li key={link.title}>
						<Link className="flex items-center gap-1 text-base" href={link.url}>
							<link.icon width={14} height={14} />

							<Body>{link.title}</Body>
						</Link>
					</li>
				))}
			</ul>
		</Section>
	)
}
