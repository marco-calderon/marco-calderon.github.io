import type { NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';
import Contact from '../containers/Contact';
import Portfolio from '../containers/Portfolio';
import Services from '../containers/Services';
import Skills from '../containers/Skills';
import { portfolioData } from '../lib/data/porfolio.data';
import { PortfolioModel } from '../lib/models/portfolio.model';

export type HomePageProps = {
	projects: PortfolioModel[];
};

const HomePage: NextPage<HomePageProps> = ({ projects }: HomePageProps) => {
	return (
		<Layout title="Home - Marco Calderon">
			<section className="hero d-flex align-items-center" data-aos="fade-up">
				<div className="container">
					<div className="row">
						<div className="col-12 d-flex flex-column align-items-center justify-content-center gap-5">
							<h1 className="text-center">
								&lt; Hi, I&apos;m Marco a Full Stack Web Developer /&gt;
							</h1>
							<h1 className="text-center">
								I&apos;m here to help you to build successful software products.
							</h1>
						</div>
					</div>
				</div>
			</section>

			<main id="main">
				<section id="about" className="about">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div
								className="col-lg-6 d-flex flex-column"
								data-aos="zoom-out"
								data-aos-delay="200"
							>
								<div className="d-flex flex-column mb-4">
									<h4 className="mb-2">Front end</h4>
									<p>
										Custom components building for websites, web applications
										and mobile apps.
									</p>
								</div>
								<div className="d-flex flex-column mb-4">
									<h4 className="mb-2">REST APIs Development</h4>
									<p>
										Implementation and integration of external/internal
										services.
									</p>
								</div>
								<div className="d-flex flex-column mb-4">
									<h4 className="mb-2">Data Persistence</h4>
									<p>
										Design, development and implementation of databases for your
										web applications.
									</p>
								</div>
							</div>
							<div
								className="col-lg-6 d-flex flex-column justify-content-center"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="content">
									<h3>About Me</h3>
									<h2>Hello! I&apos;m Marco Calderon</h2>
									<p>
										I&apos;m a Full stack web developer with 8 years of
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
