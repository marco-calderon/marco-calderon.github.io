import Link from 'next/link';
import React from 'react';

const Contact = () => {
	return (
		<section id="contact" className="mb-5 contact">
			<div className="container" data-aos="fade-up">
				<header className="section-header">
					<h2>Contact</h2>
					<p>Let&apos;s talk</p>
				</header>

				<div className="row gy-4">
					<div className="col-12 d-flex flex-column align-items-center">
						<Link
							href="https://www.upwork.com/freelancers/~01b28af275156f5d9e"
							target="_blank"
						>
							<button
								type="button"
								className="gap-2 btn btn-primary box-shadow scrollto d-inline-flex align-items-center justify-content-center align-self-center"
							>
								<span>Upwork profile</span>
								<i className="bi bi-arrow-right"></i>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
