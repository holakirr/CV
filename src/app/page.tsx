import { Additional, Contacts, Header, Projects, Skills } from '@/components';

const Home = () => (
	<main className='flex min-h-screen flex-col gap-10 bg-white'>
		<Header />
		<Projects />
		<Additional />
		<Skills />
		<Contacts />
	</main>
);

export default Home;
