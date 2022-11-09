import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row gy-4">
						<div className="col-lg-5 col-md-12 footer-info"></div>

						<div className="col-lg-2 col-6 footer-links">
							<h4>Links</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="index.html">Home</a>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="index.html#about">About</a>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="index.html#">Services</a>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="index.html#skills">Skills</a>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="index.html#portfolio">Portfolio</a>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>
									<a href="resume.html">Resume</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-2 col-6 footer-links">
							<h4>Services</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right"></i>Back end development
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>Front end development
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>REST API development
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>Mobile app development
								</li>
								<li>
									<i className="bi bi-chevron-right"></i>Database administration
								</li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
							<h4>Contact</h4>
							<p>
								<Link href="https://www.upwork.com/freelancers/~01b28af275156f5d9e">
									Upwork profile
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
