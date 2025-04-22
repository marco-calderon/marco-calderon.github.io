'use client';

import ProjectTitle from '@/components/ProjectTitle';
import Video from '@/components/Video';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const components = {
  Video: (props: any) => (
    <Video width={props.width} height={props.height} src={props.src} />
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
      <div className="w-[100vw] xs:w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[1000px] xl:w-[1000px] px-8 mt-20 xs:px-12 sm:px-20 md:px-20 lg:px-40 xl:px-40">
        <ProjectTitle project={data?.projects} />

        <TinaMarkdown content={content} components={components} />
      </div>
    </section>
  );
}
