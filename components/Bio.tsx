import type { TFnType } from "@tolgee/react";
import { Body, Section } from "#/ui";

export const Bio = ({ t }: { t: TFnType }) => (
	<Section title={t("profile.title")}>
		<Body>{t("profile.bio")}</Body>
	</Section>
);
