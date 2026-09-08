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

import type { Cv } from "#/lib/cv";
import { Section } from "#/ui";
import { GithubIcon, NpmIcon, StoryBookIcon, TelegramIcon } from "#/ui/icons";

type ProjectLink = { label: string; url: string; icon: typeof GithubIcon };

/** The API gives three optional links per project; the design shows them as tags. */
const linksOf = (project: Cv["projects"][number]): ProjectLink[] => {
	const links: ProjectLink[] = [];
	const primaryIcon = project.url.includes("npmjs.com")
		? NpmIcon
		: project.url.includes("t.me")
			? TelegramIcon
			: StoryBookIcon;
	const primaryLabel = project.url.includes("npmjs.com")
		? "Npm"
		: project.url.includes("t.me")
			? "Telegram"
			: "Site";

	links.push({ label: primaryLabel, url: project.url, icon: primaryIcon });

	if (project.repositoryUrl) {
		links.push({ label: "Github", url: project.repositoryUrl, icon: GithubIcon });
	}

	if (project.demoUrl) {
		links.push({ label: "Storybook", url: project.demoUrl, icon: StoryBookIcon });
	}

	return links;
};

export const Pets = ({ title, projects }: { title: string; projects: Cv["projects"] }) => (
	<Section title={title}>
		<div className="flex flex-col gap-3">
			{projects.map((project) => (
				<div key={project.name} className="flex flex-col gap-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipContent>{project.description}</TooltipContent>
							<TooltipTrigger className="flex gap-1 items-center">
								<SnowUIIcon width={20} height={20} />
								<Typography size={TEXT_SIZES[14]}>{project.name}</Typography>
							</TooltipTrigger>
						</Tooltip>
					</TooltipProvider>

					<div className="flex gap-1 flex-wrap">
						{linksOf(project).map((link) => (
							<Link key={link.url} target="_blank" href={link.url}>
								<Tag
									label={link.label}
									leftContent={<link.icon width={14} height={14} />}
									className="gap-1"
								/>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	</Section>
);
