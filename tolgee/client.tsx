"use client";

import { type CachePublicRecord, TolgeeProvider, type TolgeeStaticData } from "@tolgee/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TolgeeBase } from "./shared";

type Props = {
	language: string;
	staticData: TolgeeStaticData | CachePublicRecord[];
	children: React.ReactNode;
};

const tolgee = TolgeeBase().init();

export const TolgeeNextProvider = ({ language, staticData, children }: Props) => {
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: tolgee and router are stable references
	useEffect(() => {
		const { unsubscribe } = tolgee.on("permanentChange", () => {
			router.refresh();
		});
		return () => unsubscribe();
	}, [tolgee, router]);

	return (
		<TolgeeProvider tolgee={tolgee} fallback="Loading" ssr={{ language, staticData }}>
			{children}
		</TolgeeProvider>
	);
};
