import type { InferGetStaticPropsType, NextPage, NextPageContext } from 'next';
import Layout from '../components/Layout';
import Contact from '../containers/Contact';
import Services from '../containers/Services';
import Skills from '../containers/Skills';
import { client } from '../tina/__generated__/client';
import { PortfolioModel } from '../lib/models/portfolio.model';
import PortfolioSquared from '../containers/PortfolioSquared';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Home - Marco Calderon">
      <section
        className="flex-col items-center w-full bg-white fle dark:bg-slate-900"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-center mt-24 h-[40vh]">
          <div className="flex flex-col items-center gap-8 mx-12 font-bold text-center col-12">
            <h1 className="text-4xl">Marco Calderon</h1>
            <h1 className="mb-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
              Full Stack Web Developer
            </h1>
            <h1 className="text-3xl text-black/60 dark:text-white/60">
              Taking ideas to reality and building your next successful project.
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
            <div className="grid grid-cols-1 gap-4 auto-rows-1fr xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
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

        <PortfolioSquared projects={projects ?? []} />

        <Contact />
      </main>
    </Layout>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const { data } = await client.queries.projectsConnection({
    sort: 'createdDate',
    last: 100,
  });
  const projects = data.projectsConnection.edges?.map(
    (x) => x?.node as unknown as PortfolioModel
  );

  return {
    props: {
      projects,
    },
  };
}

export default HomePage;
