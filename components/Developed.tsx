import { Card, Link, Typography } from "@holakirr/snow-ui";
import { SnowUIIcon } from "@holakirr/snow-ui-icons";

import { Section } from "#/ui";
import { GithubIcon, NpmIcon, StoryBookIcon, TelegramIcon } from "#/ui/icons";

export const Developed = () => {
	return (
		<Section subtitle="Developed" className="border-t-4 border-t-black print:border-0">
			<Card bordered>
				<div className="flex gap-2 items-center">
					<SnowUIIcon width={20} height={20} />
					<Typography>Snow UI React Library</Typography>
				</div>
				<div className="flex gap-4">
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://www.npmjs.com/package/@holakirr/snow-ui"
					>
						<NpmIcon width={20} height={20} />
						Npm
					</Link>
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://github.com/holakirr/snow-ui/tree/main"
					>
						<GithubIcon width={20} height={20} />
						Github
					</Link>
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://snow-ui.holakirr.com/"
					>
						<StoryBookIcon width={20} height={20} />
						Storybook
					</Link>
				</div>
				<Typography className="text-xs">
					Designed by
					<Link href="https://snowui.byewind.com" className="ml-1" target="_blank">
						byewind
					</Link>
				</Typography>
			</Card>
			<Card bordered>
				<div className="flex gap-2 items-center">
					<SnowUIIcon width={20} height={20} />
					<Typography>Snow UI React Icons Library</Typography>
				</div>
				<div className="flex gap-4">
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://www.npmjs.com/package/@holakirr/snow-ui-icons"
					>
						<NpmIcon width={20} height={20} />
						Npm
					</Link>
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://github.com/holakirr/snow-ui-icons/tree/main"
					>
						<GithubIcon width={20} height={20} />
						Github
					</Link>
					<Link
						className="text-base flex items-center gap-2"
						target="_blank"
						href="https://snow-ui-icons.holakirr.com/"
					>
						<StoryBookIcon width={20} height={20} />
						Storybook
					</Link>
				</div>
				<Typography className="text-xs">
					Designed by
					<Link href="https://snowui.byewind.com" className="ml-1" target="_blank">
						byewind
					</Link>
				</Typography>
			</Card>
			<Card bordered className="flex flex-col">
				<Typography>VPN</Typography>
				<Link
					className="text-base flex items-center gap-2"
					target="_blank"
					href="https://t.me/holakirr_vpn_bot"
				>
					<TelegramIcon width={20} height={20} />
					Telegram
				</Link>
			</Card>
		</Section>
	);
};
