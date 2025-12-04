'use client'

import { Link, Tag, TEXT_SIZES, Typography } from '@holakirr/snow-ui'
import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import MeImage from '#/public/me.jpeg'
import { Body } from '#/ui'
import { MailIcon, PhoneIcon, WebIcon } from '#/ui/icons'
import { CONTACTS } from './const'

export const Header = () => {
	const { t } = useTranslate()

	return (
		<header className="flex flex-col gap-6 print:flex-row md:flex-row md:items-center print:items-center">
			<Image
				src={MeImage}
				alt="Photo of me"
				className="transition-all w-screen md:size-60 print:size-60"
				placeholder="blur"
				blurDataURL={MeImage.blurDataURL}
				loading="lazy"
				quality={75}
			/>

			<div className="flex flex-1 flex-col gap-1 justify-between">
				<div className="flex flex-col py-5 md:py-10">
					<Typography
						as="h1"
						size={TEXT_SIZES[48]}
						semibold
						className="flex gap-x-2 flex-wrap uppercase"
					>
						<span className="text-black">{t('personal.firstName')}</span>
						<span>{t('personal.lastName')}</span>
					</Typography>
					<Typography
						as="h2"
						size={TEXT_SIZES[24]}
						semibold
						className="leading-6 uppercase text-gray-500"
					>
						{t('personal.position')}
					</Typography>
				</div>

				<hr />

				{/* Description */}
				<div className="flex flex-col gap-2 items-start">
					<div className="flex gap-1">
						<Tag label={t('personal.address')} />

						<Tag label={t('personal.geo')} />

						<Tag label={t('personal.workFormat')} />
					</div>

					<div className="flex gap-x-2 flex-wrap">
						<Link
							href={`tel:${CONTACTS.phone}`}
							className="flex gap-1 items-center"
						>
							<PhoneIcon />
							<Body>{CONTACTS.phone}</Body>
						</Link>

						<Link
							href={`mailto:${CONTACTS.mail}`}
							className="flex gap-1 items-center"
						>
							<MailIcon />
							<Body>{CONTACTS.mail}</Body>
						</Link>

						<Link
							href={`https://${CONTACTS.website}`}
							target="_blank"
							className="flex gap-1 items-center"
						>
							<WebIcon />
							<Body>{CONTACTS.website}</Body>
						</Link>
					</div>
				</div>

				<hr />
			</div>
		</header>
	)
}
