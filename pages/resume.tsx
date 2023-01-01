import { Icon } from '@iconify/react';
import React from 'react';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Skills from '../containers/Skills';

const getIdentifiableExperiences = (prefix: string, contents: string[]) => {
	return contents.map((c, i) => ({
		id: `${prefix}-${i}`,
		content: c,
	}));
};

const Resume = () => {
	return (
		<Layout title="Resume - Marco Calderon">
			<main>
				<section data-aos="fade-up">
					<div
						className="w-full px-8 mt-20 xs:px-20 sm:px-20 md:px-40 lg:px-40 xl:px-40"
						data-aos-delay="200"
					>
						<div className="mt-5">
							<h1 className="text-2xl">Full Stack Web Developer</h1>
						</div>

						<p className="mt-5 mb-4">
							I&apos;m a Full stack web developer with 8 years of experience in
							programming for web applications. I like working on complex
							projects where Front end and Back end interact with each other,
							dealing with the complexity of integrating REST APIs, external
							services, and data persistence layers. I&apos;m always happy to
							tackle new programming languages, frameworks, and technologies and
							keep up to date with innovation in my field.
						</p>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 auto-rows-1fr">
							<div className="flex-1 p-4 text-white shadow-md rounded-xl bg-slate-600 shadow-gray-300 dark:shadow-slate-700">
								<h5 className="mb-4 font-bold">Hard Skills</h5>
								<ul>
									<li>Full stack Web Developer</li>
									<li>Database Developer</li>
									<li>Software Architecture</li>
									<li>REST API</li>
									<li>Web Services</li>
									<li>Front end Frameworks</li>
								</ul>
							</div>
							<div className="flex-1 p-4 text-white shadow-md rounded-xl bg-slate-600 shadow-gray-300 dark:shadow-slate-700">
								<h5 className="mb-4 font-bold">Soft Skills</h5>
								<ul>
									<li>Teamwork</li>
									<li>Leadership</li>
									<li>Requirements gathering</li>
									<li>Problem-solving attitude</li>
									<li>Project management</li>
									<li>Process analyst</li>
									<li>Time management</li>
								</ul>
							</div>
							<div className="flex-1 p-4 text-white shadow-md rounded-xl bg-slate-600 shadow-gray-300 dark:shadow-slate-700">
								<h5 className="mb-4 font-bold">Languages</h5>
								<ul>
									<li>Spanish: Native</li>
									<li>English: Fluent</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<Skills />

				<section data-aos="fade-up">
					<div
						className="w-full px-8 xs:px-20 sm:px-20 md:px-40 lg:px-40 xl:px-40"
						data-aos-delay="200"
					>
						<div className="row">
							<header className="flex flex-col items-center mb-5 w-100">
								<p className="text-4xl ">Experience</p>
							</header>

							<div className="col-lg-8 col-md-9 col-sm-12">
								<Experience
									title="Full Stack Web Developer (Independent)"
									location="Upwork"
									timeframe="November 2020 - Present"
									responsibilities={getIdentifiableExperiences('fwsb', [
										'Development of Django web application for showing scrapped data for podcasts stats.',
										'Chart.js plugin development with interactive behavior.',
										'Angular 10 application development for collaborative GIS tools.',
										'React application development and optimization techniques to improve performance and speed.',
										'Mobile application development using Ionic Framework 5 and React Native.',
										'Angular application development for IT SaaS platform.',
										'React web application for NFT management.',
										'JavaScript library integration and styling customization for a movie producer platform.',
										'Full stack development of web application made in React using Next.js and Nest.js in the backend.',
										'API integration with an existing React application for shop management.',
										'React development with custom styling for a PDF files management platform.',
										'Automation development for scraping and food order.',
									])}
								/>

								<Experience
									title="Lead Full Stack Web Developer"
									location="Advancio"
									timeframe="August 2018 - October 2020"
									responsibilities={getIdentifiableExperiences('lfswb-a', [
										'.NET Framework and ASP.NET Core development of administrative dashboards that transfers data using SQL Server (T-SQL) and SSIS technologies.',
										'Onboarding and training of new team members.',
										'Design and implementation of customized REST APIs.',
										'Requirements gathering directly with clients for full projects and releases.',
										'Detailed documentation of the development process for each stage.',
										'Development of Angular 10, React Web Apps using ASP.NET Core MVC for Back end.',
									])}
								/>

								<Experience
									title="Lead Java Full Stack Web Developer"
									location="CICESE - IT Department"
									timeframe="February 2017 - May 2018"
									responsibilities={getIdentifiableExperiences('ljfswb-c', [
										'Lead of Front end development for warehouse operations systems.',
										'Full stack Web Development of administrative systems in Java, Spring Framework and REST APIs. Design of database schemas in Oracle.',
										'Process analyst including code maintaining tasks and documentation. Tool development for administrative systems using C#.',
									])}
								/>

								<Experience
									title="Software Engineer"
									location="CICESE - Applied Physics Department"
									timeframe="February 2016 - February 2017"
									responsibilities={getIdentifiableExperiences('se-c', [
										'Embedded development of Optical Sensors using C/C++ for Linux.',
										'Performing image processing and compression tasks for a miniaturized satellite (CubeSATs).',
										'UI/UX of the Earth Station’s CubeSAT control.',
										'Data acquisition and image processing tasks using Qt.',
										'Web services development for oceanographic metrics implementing automated processes for Data retrieving.',
									])}
								/>

								<Experience
									title="Full Stack Java Web Developer (Intern)"
									location="Softtek"
									timeframe="January 2013 - June 2013"
									responsibilities={getIdentifiableExperiences('fsjwb-s', [
										'Java Web Development for management software using MVC pattern.',
										'Android Mobile Apps development.',
									])}
								/>

								<Experience
									title="Embedded Software Developer (Intern)"
									location="Professional Services of Ensenada"
									timeframe="January 2011 - March 2012"
									responsibilities={getIdentifiableExperiences('esd-p', [
										'Embedded software development for PLCs and automation oriented systems for local industry.',
									])}
								/>
							</div>
						</div>
					</div>
				</section>

				<section data-aos="fade-up">
					<div
						className="w-full px-8 mt-20 xs:px-20 sm:px-20 md:px-40 lg:px-40 xl:px-40"
						data-aos-delay="200"
					>
						<div className="row">
							<header className="flex flex-col items-center mb-5 w-100">
								<p className="text-4xl ">Education</p>
							</header>

							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-2 mb-1">
									<h5 className="text-xl text-blue-500 dark:text-blue-300">
										M.Sc. in Computer Science
									</h5>
									<h6 className="text-lg font-bold">CICESE</h6>
									<p className="text-base">2013 - 2016</p>
									<p>
										Internet of Things - Human-centric App for Kinetic
										Wearables.
									</p>
								</div>

								<div className="flex flex-col gap-2 mb-1">
									<h5 className="text-xl text-blue-500 dark:text-blue-300">
										B.S. in Electronic Cybernetics Engineering
									</h5>
									<h6 className="text-lg font-bold">
										Cetys University International Campus
									</h6>
									<p className="text-base">2009 - 2013</p>
									<p>
										Created IoT Devices and Apps to regulate home electric
										consumption.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default Resume;
