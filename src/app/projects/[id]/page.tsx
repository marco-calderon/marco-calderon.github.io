import React from 'react';
import client from '../../../../tina/__generated__/client';
import DetailsPageContent from './components/details-page';

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const requestParams = await params;
  const { data, query, variables } = await client.queries.projects({
    relativePath: `${requestParams.id}.mdx`,
  });

  return <DetailsPageContent query={query} variables={variables} data={data} />;
}

export async function generateStaticParams() {
  const { data } = await client.queries.projectsConnection();

  return data.projectsConnection.edges?.map((x) => {
    return { id: x?.node?._sys.filename };
  });
}
