"use client";
import { Button } from "@holakirr/snow-ui";

const downloadHandler = () => window.open("/KirillPetuninCV.pdf", "_blank");

export const DownloadCVBtn = () => (
	<Button variant="filled" onClick={downloadHandler} className="self-start print:hidden">
		Download CV
	</Button>
);
