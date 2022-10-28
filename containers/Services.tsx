import React from 'react';

const Services = () => {
	return (
		<section id="services" className="services">
			<div className="container" data-aos="fade-up">
				<header className="section-header mb-5">
					<h2>Services</h2>
					<p>What I can do</p>
				</header>

				<div className="row gy-4">
					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="service-box blue">
							<i className="ri-window-line icon"></i>
							<h3>Front End</h3>
							<p>
								Modern Front End development with React, Angular and plain HTML,
								JavaScript and CSS. I can also work with Bootstrap, TailwindCSS,
								Foundation, and other styling solutions for your projects.
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="service-box orange">
							<i className="ri-server-line icon"></i>
							<h3>Back End</h3>
							<p>
								Using modern technologies and used frameworks such as Django,
								ASP.NET, Spring Framework, Express, Nest.js, Ruby on Rails. If
								you have another option, we can discuss it.
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						<div className="service-box green">
							<i className="ri-global-line icon"></i>
							<h3>REST API Development</h3>
							<p>
								Integrating, implementing REST APIs with your selected
								technology. Optimization of existing code for performance (in
								time and memory).
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<div className="service-box red">
							<i className="ri-database-2-line icon"></i>
							<h3>Database Administration and Development</h3>
							<p>
								From making performant queries to database schema migrations. I
								can also work with ETL tasks.
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<div className="service-box purple">
							<i className="ri-pie-chart-line icon"></i>
							<h3>Data Mining and Processing</h3>
							<p>
								Integrate business logic into data processing from different
								sources, such as APIs and dynamic websites.
							</p>
						</div>
					</div>

					<div
						className="col-lg-4 col-md-6"
						data-aos="fade-up"
						data-aos-delay="700"
					>
						<div className="service-box blue">
							<i className="ri-cloud-line icon"></i>
							<h3>DevOps</h3>
							<p>
								If you need to manage your development operations, I can help
								you in the cloud your project uses.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
