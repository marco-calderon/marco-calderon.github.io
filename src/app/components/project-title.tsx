import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';
import { PortfolioModel } from '../../lib/models/portfolio.model';
import { tags } from '../../lib/data/tags.data';
import ProjectTag from './project-tag';

export type ProjectTitleProps = {
  project: PortfolioModel;
};

const ProjectTitle = ({ project }: ProjectTitleProps) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex flex-wrap justify-between mb-2">
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">
          {project?.title}
        </h2>
        <div className="flex flex-row gap-4">
          {project?.repoUrl && (
            <Link href={project?.repoUrl} target="_blank">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-blue-500 transition-all border border-blue-500 rounded hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-300 dark:hover:border-blue-300 cursor-pointer"
              >
                <span>Repository</span>&nbsp;
                <Icon icon="bi:github" />
              </button>
            </Link>
          )}

          {project?.demoUrl && (
            <Link href={project?.demoUrl} target="_blank">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-orange-500 transition-all border border-orange-500 rounded hover:text-orange-700 hover:border-orange-700 dark:hover:text-orange-300 dark:hover:border-orange-300 cursor-pointer"
              >
                <span>Demo</span>&nbsp;
                <Icon icon="bi:window" />
              </button>
            </Link>
          )}

          {project?.linkUrl && (
            <Link href={project?.linkUrl} target="_blank">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-green-500 transition-all border border-green-500 rounded hover:text-green-700 hover:border-green-700 dark:hover:text-green-300 dark:hover:border-green-300 cursor-pointer"
              >
                <span>Link</span>&nbsp;
                <Icon icon="bi:link" />
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-6 mb-2">
        {project?.tags &&
          project?.tags.map((tagId) => {
            const t = tags.find((t) => t.id == tagId);
            return (
              <ProjectTag
                key={t?.id}
                tag={t?.name ?? ''}
                icon={t?.icon ?? ''}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectTitle;
