import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getProject, getProjects } from '../../lib/data/project.data';
import { PortfolioModel } from '../../lib/models/portfolio.model';
import ProjectTitle from '../../components/ProjectTitle';
import Layout from '../../components/Layout';

export type ProjectDetailsPageProps = {
	id: string;
	project?: PortfolioModel;
	contentHtml: string;
};

/**
 * Shows the details of the project.
 *
 * @param props is the props object passed down from getStaticProps
 * @returns the renderede component
 */
const ProjectDetailsPage = ({
	project,
	contentHtml,
}: ProjectDetailsPageProps) => {
	return (
		<Layout title={`${project!.title} - Marco Calderon`}>
			<main>
				<section
					id="portfolio-details"
					className="flex flex-col items-center w-[100vw] xs:w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[1000px] xl:w-[1000px]"
				>
					<div className="w-full px-8 mt-20 xs:px-12 sm:px-20 md:px-20 lg:px-40 xl:px-40">
						<ProjectTitle project={project!} />

						<div className="">
							<div dangerouslySetInnerHTML={{ __html: contentHtml }} />
						</div>
					</div>
				</section>
			</main>
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
	const files = await getProjects();

	return {
		paths: files.map((f) => ({ params: { id: f.replace('.md', '') } })),
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
	const props = await getProject(ctx.params!.id as string);

	return {
		props,
	};
};

export default ProjectDetailsPage;
