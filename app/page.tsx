import { redirect } from "next/navigation";
import { DEFAULT_LANGUAGE } from "#/tolgee/shared";

export default function RootPage() {
	redirect(`/${DEFAULT_LANGUAGE}`);
}
