"use client";

import { Button } from "@holakirr/snow-ui";
import { ArrowsDownIcon } from "@holakirr/snow-ui-icons";

const downloadHandler = () => window.open("/KirillPetuninCV.pdf", "_blank");

export const DownloadCVBtn = () => (
	<Button
		onClick={downloadHandler}
		className="fixed bottom-5 right-5 md:bottom-10 md:right-10 group print:hidden"
		variant="filled"
		size="lg"
		label="Download"
		rightContent={<ArrowsDownIcon className="fill-white" />}
	/>
);
