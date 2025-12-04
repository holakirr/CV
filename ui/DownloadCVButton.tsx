'use client'

import { Button } from '@holakirr/snow-ui'
import { ArrowsDownIcon } from '@holakirr/snow-ui-icons'
import { useTranslate } from '@tolgee/react'

const downloadHandler = (locale: string) =>
	window.open(`/KirillPetuninCV-${locale}.pdf`, '_blank')

export const DownloadCVBtn = ({ locale }: { locale: string }) => {
	const { t } = useTranslate()

	return (
		<Button
			onClick={() => downloadHandler(locale)}
			className="fixed bottom-5 right-5 md:bottom-10 md:right-10 group print:hidden"
			variant="filled"
			size="lg"
			label={t('common.actions.download')}
			rightContent={<ArrowsDownIcon className="fill-white" />}
		/>
	)
}
