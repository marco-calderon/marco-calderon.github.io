import Link from 'next/link';
import React from 'react';
import { PortfolioModel } from '../lib/models/portfolio.model';

export type ProjectTitleProps = {
	project: PortfolioModel;
};

const ProjectTitle = ({ project }: ProjectTitleProps) => {
	return (
		<div className="row mb-4">
			<div className="col-lg-8 offset-lg-2">
				<div className="d-flex flex-wrap justify-content-between mb-2">
					<h2 className="font-weight-bold">{project.title}</h2>
					<div className="links-container d-flex flex-row gap-2">
						{project.repoUrl && (
							<Link href={project.repoUrl} target="_blank">
								<button
									type="button"
									className="btn btn-secondary d-inline-flex align-items-center justify-content-center"
								>
									<span>Repository</span>&nbsp;<i className="bi bi-github"></i>
								</button>
							</Link>
						)}

						{project.demoUrl && (
							<Link href={project.demoUrl} target="_blank">
								<button
									type="button"
									className="btn btn-outline btn-primary d-inline-flex align-items-center justify-content-center"
								>
									<span>Demo</span>&nbsp;<i className="bi bi-window"></i>
								</button>
							</Link>
						)}

						{project.linkUrl && (
							<Link href={project.linkUrl} target="_blank">
								<button
									type="button"
									className="btn btn-primary d-inline-flex align-items-center justify-content-center"
								>
									<span>Link</span>&nbsp;<i className="bi bi-link"></i>
								</button>
							</Link>
						)}
					</div>
				</div>
				<div className="mb-2 d-flex flex-row gap-1">
					{project.tags &&
						project.tags.map((t) => (
							<span key={t.id} className={`badge bg-${t.class}`}>
								{t.name}
							</span>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProjectTitle;
