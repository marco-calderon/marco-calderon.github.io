import { Metadata } from 'next';
import Hero from './components/hero';
import client from '../../tina/__generated__/client';
import { PortfolioModel } from '@/lib/models/portfolio.model';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Marco Calderon',
  description: 'Portfolio of Marco Calderon',
  openGraph: {
    images: ['https://marco-calderon.vercel.app/api/og'],
  },
};

const PortfolioSquared = dynamic(
  () => import('./components/portfolio-squared').then((mod) => mod.default),
  {
    loading() {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <svg
            className="w-10 h-10 animate-spin text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"
            />
            <path fill="currentColor" d="M12.5,6.5h-1v7h1Zm0,9h-1v1h1Z" />
          </svg>
        </div>
      );
    },
  }
);

export default async function HomePage() {
  const { data } = await client.queries.projectsConnection({
    sort: 'createdDate',
    last: 100,
  });
  const projects =
    data.projectsConnection.edges?.map(
      (x) => x?.node as unknown as PortfolioModel
    ) ?? [];

  return (
    <>
      <Hero />

      <main id="main">
        <section id="about" className="w-full">
          <div className="mx-auto w-auto max-w-auto lg:w-[1300px] lg:max-w-[1300px] mt-20 px-5 lg:px-0">
            <div className="grid grid-cols-1 gap-4 auto-rows-1fr lg:grid-cols-2">
              <div className="flex flex-col flex-1 gap-8">
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
              <div className="flex flex-col justify-center flex-1">
                <div className="flex flex-col p-12 bg-blue-300 rounded-3xl dark:bg-blue-700">
                  <h3 className="mb-4 font-bold text-blue-700 upercase dark:text-blue-200">
                    About Me
                  </h3>
                  <p>
                    I&apos;m a Full stack web developer with 9 years of
                    experience in programming web applications with a variety of
                    technologies and stacks. I like working on complex projects
                    where Front end and Back end interact with each other,
                    dealing with the complexity of integrating REST APIs,
                    external services, and data persistence layers. I&apos;m
                    always happy to tackle new programming languages,
                    frameworks, and technologies and keep up to date with
                    innovation in my field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <Skills />

        <PortfolioSquared projects={projects} />

        <Contact />
      </main>
    </>
  );
}
