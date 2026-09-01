import { Link } from "@holakirr/snow-ui";

import type { Cv } from "#/lib/cv";
import { Body, Section } from "#/ui";
import { GithubIcon, InstagramIcon, LinkedInIcon, TelegramIcon, WebIcon } from "#/ui/icons";

const ICON_BY_PLATFORM = {
	GITHUB: GithubIcon,
	LINKEDIN: LinkedInIcon,
	TELEGRAM: TelegramIcon,
	INSTAGRAM: InstagramIcon,
	WEBSITE: WebIcon,
} as const;

const iconFor = (platform: string) =>
	ICON_BY_PLATFORM[platform as keyof typeof ICON_BY_PLATFORM] ?? WebIcon;

export const Contacts = ({
	title,
	socialLinks,
}: {
	title: string;
	socialLinks: Cv["socialLinks"];
}) => (
	<Section tag="footer" title={title}>
		<ul className="flex flex-col gap-1">
			{socialLinks.map((link) => {
				const Icon = iconFor(link.platform);

				return (
					<li key={link.url}>
						<Link className="flex items-center gap-1 text-base" href={link.url} target="_blank">
							<Icon width={14} height={14} />

							<Body>{link.label}</Body>
						</Link>
					</li>
				);
			})}
		</ul>
	</Section>
);
