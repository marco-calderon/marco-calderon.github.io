import type { NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';
import Contact from '../containers/Contact';
import Portfolio from '../containers/Portfolio';
import Services from '../containers/Services';
import Skills from '../containers/Skills';
import { portfolioData } from '../lib/data/portfolio.data';
import { PortfolioModel } from '../lib/models/portfolio.model';

export type HomePageProps = {
	projects: PortfolioModel[];
};

const HomePage: NextPage<HomePageProps> = ({ projects }: HomePageProps) => {
	return (
		<Layout title="Home - Marco Calderon">
			<section
				className="flex items-center bg-white dark:bg-slate-800"
				data-aos="fade-up"
			>
				<div className="flex flex-col items-center justify-center mt-24 h-72">
					<div className="flex flex-col items-center gap-8 mx-12 font-bold text-center col-12">
						<h1 className="text-4xl">
							&lt; Hi, I&apos;m Marco a Full Stack Web Developer /&gt;
						</h1>
						<h1 className="text-4xl">
							I&apos;m here to help you to build successful software products.
						</h1>
					</div>
				</div>
			</section>

			<main id="main">
				<section id="about">
					<div
						className="w-full px-8 mt-20 xs:px-20 sm:px-20 md:px-40 lg:px-40 xl:px-40"
						data-aos="fade-up"
					>
						<div className="flex flex-row items-start gap-4">
							<div
								className="flex flex-col flex-1 gap-8"
								data-aos="zoom-out"
								data-aos-delay="200"
							>
								<div className="flex flex-col mb-4">
									<h4 className="mb-2 text-xl font-bold">Front end</h4>
									<p>
										Custom components building for websites, web applications
										and mobile apps.
									</p>
								</div>
								<div className="flex flex-col mb-4">
									<h4 className="mb-2 text-xl font-bold">
										REST APIs Development
									</h4>
									<p>
										Implementation and integration of external/internal
										services.
									</p>
								</div>
								<div className="flex flex-col mb-4">
									<h4 className="mb-2 text-xl font-bold">Data Persistence</h4>
									<p>
										Design, development and implementation of databases for your
										web applications.
									</p>
								</div>
							</div>
							<div
								className="flex flex-col justify-center flex-1"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="flex flex-col p-12 bg-blue-300 rounded-lg dark:bg-blue-700">
									<h3 className="font-bold text-blue-700 upercase dark:text-blue-200">
										About Me
									</h3>
									<h2 className="mb-12 text-2xl text-black dark:text-white">
										Hello! I&apos;m Marco Calderon
									</h2>
									<p>
										I&apos;m a Full stack web developer with 9 years of
										experience in programming for web applications. I like
										working on complex projects where Front end and Back end
										interact with each other, dealing with the complexity of
										integrating REST APIs, external services, and data
										persistence layers. I&apos;m always happy to tackle new
										programming languages, frameworks, and technologies and keep
										up to date with innovation in my field.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Services />

				<Skills />

				<Portfolio projects={projects} />

				<Contact />
			</main>
		</Layout>
	);
};

export async function getStaticProps(context: NextPageContext) {
	const projects = portfolioData;

	return {
		props: {
			projects,
		},
	};
}

export default HomePage;
