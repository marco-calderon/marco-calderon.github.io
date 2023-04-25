import React from 'react';
import Layout from '../../components/Layout';
import { InferGetStaticPropsType, NextPage, NextPageContext } from 'next';
import { PortfolioModel } from '../../lib/models/portfolio.model';
import client from '../../tina/__generated__/client';
import PortfolioSquared from '../../containers/PortfolioSquared';

const ProjectsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Projects - Marco Calderon">
      <PortfolioSquared projects={projects ?? []} />
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

export default ProjectsPage;
