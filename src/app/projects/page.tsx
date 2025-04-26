import React from 'react';
import client from '../../../tina/__generated__/client';
import { PortfolioModel } from '@/lib/models/portfolio.model';
import PortfolioSquared from '../components/portfolio-squared';

export default async function ProjectsPage() {
  const { data } = await client.queries.projectsConnection({
    sort: 'createdDate',
    last: 100,
  });
  const projects = data.projectsConnection.edges?.map(
    (x) => x?.node as unknown as PortfolioModel
  );

  return <PortfolioSquared projects={projects ?? []} />;
}
