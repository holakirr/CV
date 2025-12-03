import {
	Link,
	Tag,
	TEXT_SIZES,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	Typography,
} from "@holakirr/snow-ui";
import { SnowUIIcon } from "@holakirr/snow-ui-icons";

import { Section } from "#/ui";
import { GithubIcon, NpmIcon, StoryBookIcon, TelegramIcon } from "#/ui/icons";

export const Developed = () => (
	<Section title="Pets">
		<div className="flex flex-col gap-3">
			<div className="flex flex-col gap-1">
				<TooltipProvider>
					<Tooltip>
						<TooltipContent>React Components Library</TooltipContent>
						<TooltipTrigger className="flex gap-1 items-center">
							<SnowUIIcon width={20} height={20} />
							<Typography size={TEXT_SIZES[14]}>Snow UI</Typography>
						</TooltipTrigger>
					</Tooltip>
				</TooltipProvider>
				<div className="flex gap-1">
					<Link target="_blank" href="https://www.npmjs.com/package/@holakirr/snow-ui">
						<Tag label="Npm" leftContent={<NpmIcon width={14} height={14} />} className="gap-1" />
					</Link>
					<Link target="_blank" href="https://github.com/holakirr/snow-ui/tree/main">
						<Tag
							label="Github"
							leftContent={<GithubIcon width={14} height={14} />}
							className="gap-1"
						/>
					</Link>
					<Link target="_blank" href="https://github.com/holakirr/snow-ui/tree/main">
						<Tag
							label="Storybook"
							leftContent={<StoryBookIcon width={14} height={14} />}
							className="gap-1"
						/>
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<TooltipProvider>
					<Tooltip>
						<TooltipContent>React Icons Library</TooltipContent>
						<TooltipTrigger className="flex gap-1 items-center">
							<SnowUIIcon width={20} height={20} />
							<Typography size={TEXT_SIZES[14]}>Snow UI Icons</Typography>
						</TooltipTrigger>
					</Tooltip>
				</TooltipProvider>
				<div className="flex gap-1">
					<Link target="_blank" href="https://www.npmjs.com/package/@holakirr/snow-ui-icons">
						<Tag label="Npm" leftContent={<NpmIcon width={14} height={14} />} className="gap-1" />
					</Link>
					<Link target="_blank" href="https://github.com/holakirr/snow-ui-icons/tree/main">
						<Tag
							label="Github"
							leftContent={<GithubIcon width={14} height={14} />}
							className="gap-1"
						/>
					</Link>
					<Link target="_blank" href="https://snow-ui-icons.holakirr.com/">
						<Tag
							label="Storybook"
							leftContent={<StoryBookIcon width={14} height={14} />}
							className="gap-1"
						/>
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<TooltipProvider>
					<Tooltip>
						<TooltipContent>Distribution Bot</TooltipContent>
						<TooltipTrigger className="flex gap-1 items-center">
							<Typography size={TEXT_SIZES[14]}>VPN</Typography>
						</TooltipTrigger>
					</Tooltip>
				</TooltipProvider>
				<div className="flex gap-1">
					<Link target="_blank" href="https://t.me/holakirr_vpn_bot">
						<Tag
							label="Telegram"
							leftContent={<TelegramIcon width={14} height={14} />}
							className="gap-1"
						/>
					</Link>
				</div>
			</div>
		</div>
	</Section>
);
