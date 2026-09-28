"use client";

import { useTranslate } from "@tolgee/react";

/** A plain link to the pre-rendered PDF; it lives in the header and is hidden on print. */
export const DownloadCVBtn = ({ locale }: { locale: string }) => {
	const { t } = useTranslate();

	return (
		<a
			href={`/KirillPetunin-frontend-CV-${locale}.pdf`}
			target="_blank"
			rel="noreferrer"
			className="rounded-lg bg-orange-950 px-3.5 py-2 text-[13px] font-bold text-orange-100 hover:text-white hover:no-underline lg:py-[7px]"
		>
			{t("common.actions.download")} ↓
		</a>
	);
};
