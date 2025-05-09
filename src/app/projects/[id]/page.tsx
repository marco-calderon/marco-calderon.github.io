import React from 'react';
import client from '../../../../tina/__generated__/client';
import DetailsPageContent from './components/details-page';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;

    const { data } = await client.queries.projects({
      relativePath: `${id}.mdx`,
    });

    return {
      title: data.projects.title,
      description: data.projects.description,
      openGraph: {
        images: [data.projects.imgUrl ?? ''],
      },
    };
  } catch (err) {
    return {
      title: 'Project not found',
      description: 'The project you are looking for does not exist.',
      openGraph: {
        images: [],
      },
    };
  }
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  try {
    const requestParams = await params;
    const { data, query, variables } = await client.queries.projects({
      relativePath: `${requestParams.id}.mdx`,
    });

    return (
      <DetailsPageContent query={query} variables={variables} data={data} />
    );
  } catch (err) {
    redirect('/not-found');
  }
}

export async function generateStaticParams() {
  const { data } = await client.queries.projectsConnection();

  return (
    data.projectsConnection.edges?.map((x) => {
      return { id: x?.node?._sys.filename };
    }) ?? []
  );
}
