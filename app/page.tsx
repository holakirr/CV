import { Button } from "@holakirr/snow-ui";
import { ArrowsDownIcon } from "@holakirr/snow-ui-icons";
import { Bio, Contacts, Developed, Header, Projects, Skills, Technologies } from "#/components";

export default function Home() {
	return (
		<main className="flex flex-col gap-10 bg-white mx-auto md:w-3xl lg:w-4xl md:my-6 lg:my-10 print:my-0 pb-20 p-4 md:p-6 xl:p-10 print:p-10 print:w-full shadow-paper print:shadow-none print:text-gray-500">
			<Header />
			<div className="w-full md:flex md:flex-row-reverse space-y-3 md:space-y-0 md:gap-3">
				<div className="flex flex-col gap-4">
					<Bio />

					<Projects />
				</div>

				<hr className="md:w-px md:h-auto md:bg-gray-200" />

				<aside className="md:min-w-60 space-y-3 md:space-y-4">
					<Technologies />

					<hr />

					<Skills />

					<hr />

					<Developed />

					<hr />

					<Contacts />
				</aside>
			</div>

			<Button
				className="fixed bottom-5 right-5 md:bottom-10 md:right-10 group print:hidden"
				variant="filled"
				size="lg"
				rightContent={<ArrowsDownIcon className="fill-white" />}
			/>
		</main>
	);
}
