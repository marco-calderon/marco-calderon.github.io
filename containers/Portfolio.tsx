import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { PortfolioModel } from '../lib/models/portfolio.model';
import { motion, AnimatePresence } from 'framer-motion';

export type PortfolioProps = {
	projects: PortfolioModel[];
};

export type Filter = 'web' | 'mobile' | 'full' | 'all';

const Portfolio = ({ projects }: PortfolioProps) => {
	const [filter, setFilter] = useState<Filter>('all');

	const filteredProjects = useMemo(
		() =>
			projects.filter((p) => (filter === 'all' ? true : p.category === filter)),
		[projects, filter]
	);

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
							<li
								className={filter === 'all' ? 'filter-active' : ''}
								onClick={() => setFilter('all')}
							>
								All
							</li>
							<li
								className={filter === 'full' ? 'filter-active' : ''}
								onClick={() => setFilter('full')}
							>
								Web App
							</li>
							<li
								className={filter === 'mobile' ? 'filter-active' : ''}
								onClick={() => setFilter('mobile')}
							>
								Mobile
							</li>
							<li
								className={filter === 'web' ? 'filter-active' : ''}
								onClick={() => setFilter('web')}
							>
								Front end
							</li>
						</ul>
					</div>
				</div>
				<div
					className="row gy-4 portfolio-container"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					<AnimatePresence>
						{filteredProjects &&
							filteredProjects.map((p) => (
								<motion.div
									key={p.id}
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
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
															<span
																key={t.id}
																className={`badge bg-${t.class}`}
															>
																{t.name}
															</span>
														))}
												</div>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
