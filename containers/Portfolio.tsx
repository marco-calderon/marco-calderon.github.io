import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PortfolioModel } from '../lib/models/portfolio.model';

export type PortfolioProps = {
	projects: PortfolioModel[];
};

const Portfolio = ({ projects }: PortfolioProps) => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="container" data-aos="fade-up">
				<header className="section-header">
					<h2>Portfolio</h2>
					<p>My latest work</p>
				</header>

				<div className="row" data-aos="fade-up" data-aos-delay="100">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-flters">
							<li data-filter="*" className="filter-active">
								All
							</li>
							<li data-filter=".filter-full">Web App</li>
							<li data-filter=".filter-mobile">Mobile</li>
							<li data-filter=".filter-web">Front end</li>
						</ul>
					</div>
				</div>
				<div
					className="row gy-4 portfolio-container"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{projects &&
						projects.map((p) => (
							<div
								key={p.id}
								className={`col-lg-4 col-md-6 portfolio-item filter-${p.category}`}
							>
								<Link href={`/projects/${p.id}`}>
									<div className="portfolio-wrap">
										<Image
											src={p.imgUrl}
											className="img-fluid"
											alt=""
											width={p.width}
											height={p.height}
										/>
										<div className="portfolio-info">
											<h4>{p.title}</h4>
											<div className="mb-2 d-flex flex-row gap-1">
												{p.tags &&
													p.tags.map((t) => (
														<span key={t.id} className={`badge bg-${t.class}`}>
															{t.name}
														</span>
													))}
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
