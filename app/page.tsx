import { Additional, Contacts, Header, Projects, Skills } from "@/components";

const Home = () => (
	<main className="flex flex-col border-4 rounded-3xl overflow-hidden border-black mx-auto w-fit my-2 md:my-4 print:p-0 print:border-none print:rounded-none">
		<Header />
		<Projects />
		<Additional />
		<Skills />
		<Contacts />
	</main>
);

export default Home;
