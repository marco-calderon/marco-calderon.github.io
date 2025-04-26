'use client';

import ProjectTitle from '@/app/components/project-title';
import ProjectVideo from '@/app/components/project-video';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const components = {
  Video: (props: any) => (
    <ProjectVideo width={props.width} height={props.height} src={props.src} />
  ),
};

type ProjectDetailsPageProps = {
  query: string;
  variables: Record<string, any>;
  data: any;
};

export default function DetailsPageContent({
  query,
  variables,
  data: _data,
}: ProjectDetailsPageProps) {
  const { data } = useTina({
    query: query,
    variables: variables,
    data: _data,
  });

  const content = data?.projects?.body;

  return (
    <section
      id="portfolio-details"
      className="flex flex-col items-center w-full"
    >
      <div className="w-screen lg:w-[1300px] px-8 mt-20 md:px-20 lg:px-40 xl:px-40">
        <ProjectTitle project={data?.projects} />

        <TinaMarkdown content={content} components={components} />
      </div>
    </section>
  );
}
