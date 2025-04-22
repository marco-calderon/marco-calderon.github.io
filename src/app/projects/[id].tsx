import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import ProjectTitle from '../../src/components/ProjectTitle';
import Layout from '../../src/components/Layout';
import { useTina } from 'tinacms/dist/react';
import { client } from '../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Video from '../../src/components/Video';

const components = {
  Video: (props: any) => (
    <Video width={props.width} height={props.height} src={props.src} />
  ),
};

/**
 * Shows the details of the project.
 *
 * @param props is the props object passed down from getStaticProps
 * @returns the renderede component
 */
const ProjectDetailsPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data?.projects?.body;

  return (
    <Layout title={`${data?.projects?.title} - Marco Calderon`}>
      <section
        id="portfolio-details"
        className="flex flex-col items-center w-full"
      >
        <div className="w-[100vw] xs:w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[1000px] xl:w-[1000px] px-8 mt-20 xs:px-12 sm:px-20 md:px-20 lg:px-40 xl:px-40">
          <ProjectTitle project={data?.projects} />

          <TinaMarkdown content={content} components={components} />
        </div>
      </section>
    </Layout>
  );
};

/**
 * Generates all the possible projects paths with its id.
 *
 * @param ctx is the context
 * @returns all the paths available
 */
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await client.queries.projectsConnection();
  const paths = data.projectsConnection.edges?.map((x) => {
    return { params: { id: x?.node?._sys.filename } };
  });

  return {
    paths: paths ?? [],
    fallback: 'blocking',
  };
};

/**
 * Gets the information for the project and provides it to the component.
 *
 * @param ctx is the context
 * @returns the properties of the project
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.projects({
    relativePath: ctx.params?.id + '.mdx',
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

export default ProjectDetailsPage;
