import { Additional, Header, Projects, Skills } from '@/components';
const Home = () => (
	<main className='flex min-h-screen flex-col gap-10 bg-white md:p-6 xl:p-10'>
		<Header />
		<Projects />
		<Additional />
		<Skills />
	</main>
);
export default Home;
