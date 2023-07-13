import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import AnimCursor from '../../components/animCursor';

import Img1 from '../../assets/img/case2/img1.png';
import Img2 from '../../assets/img/case2/img2.png';
import Img3 from '../../assets/img/case2/img3.png';
import Img4 from '../../assets/img/case2/img4.png';
import Img5 from '../../assets/img/case2/img5.png';
import Img6 from '../../assets/img/case2/img6.png';
import Img7 from '../../assets/img/case2/img7.png';
import Img8 from '../../assets/img/case2/img8.png';

import RightArrowWhite from '../../assets/img/svg/rightArrowWhite.svg';
import SmileIconHands from '../../assets/img/svg/smileIconHands.svg';

import '../../utils/case-global.scss';
import './styles.scss';
import { useNavigateToTop } from '../../utils/useNavigateToTop';
import { changeNavBg } from '../../utils/headerScroll';

function Case2() {
	const [headerBg, setHeaderBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => changeNavBg(setHeaderBg));
		return () => {
			window.removeEventListener('scroll', () => changeNavBg(setHeaderBg));
		};
	}, []);

	const navigateToTop = useNavigateToTop();

	const navigateAndReset = event => {
		event.preventDefault();
		navigateToTop('/details-3');
	};

	return (
		<div className='details-wrapper'>
			<AnimCursor />
			<Header headerBg={headerBg} />
			<div className='details-container'>
				<div className='details-section details-section__white'>
					<img className='details-img' src={Img1} alt='logo' />
				</div>
				<div className='details-section details-section__black'>
					<div className='details-description'>
						<div className='details-description__item'>
							<h1 className='details-description__title'>team/role</h1>
							<p className='details-description__text'>
								I worked as a contract Product Designer for a financial startup
								and collaborated with the development team, product manager,
								business representatives.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Product</h1>
							<p className='details-description__text'>
								Financial start-up in the field of mortgages and refinancing
								loans against real estate, which has set itself the goal of
								becoming more convenient and modern.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Process</h1>
							<p className='details-description__text'>
								In this project, I worked with the analytics data of an existing
								web product and with UX of the brokers who work in this company,
								created the structure and design of the service and tested
								prototype.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>WHAT I DELIVERED</h1>
							<p className='details-description__text'>
								As a result, we have reduced and improved the user flow in
								accordance with the average session duration, created convenient
								accounts for monitoring payments and applicants.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='details-section details-section__white'>
				<img className='details-img mb-large' src={Img2} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<div className='details-stages'>
					<div className='details-stages__inner'>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE FIRST STAGE
								</span>{' '}
								I worked with analytical data SimilarWeb, researched the
								competitive environment in the local market. and considered the
								trend solutions of the leaders of this niche in different
								countries.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE SECOND STAGE
								</span>{' '}
								I conducted a survey of brokers who work in this company to
								understand their goals and pain points when working with a
								client base.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE THIRD STAGE
								</span>{' '}
								I documented the results and together with PM and Development
								Engineer agreed on the structure of the user flow.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									AT THE FOURTH STAGE
								</span>{' '}
								a user flow was created for potential clients.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								In addition, we managed to shorten the path for user
								registration, designed a convenient affordability calculator and
								created a clear dashboard for the client to track payments.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='details-section details-section__white details-section__multyImg'>
				<img className='details-img__multy mb-medium' src={Img3} alt='logo' />
				<img className='details-img__multy mb-medium' src={Img4} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<img className='details-img mb-large' src={Img5} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<div className='details-stages'>
					<div className='details-stages__inner'>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE FIRST RESULT
								</span>{' '}
								includes the creation of a new dashboard where the client can
								track their payments and those of their partners, apply for a
								mortgage extension and contact support for more information.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='details-section details-section__white'>
				<img className='details-img mb-medium' src={Img6} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<img className='details-img mb-medium' src={Img7} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<img className='details-img mb-large' src={Img8} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<div className='details-stages'>
					<div className='details-stages__inner'>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE SECOND RESULT
								</span>{' '}
								obtained during testing with Maze showed that we successfully
								reformatted the survey form and now it can be easily completed
								in 2-4 minutes on the first session without sacrificing basic
								data about the applicant and contact the manager.
							</p>
							<p className='details-stages__span'>
								<img
									className='details-stages__span--img'
									src={SmileIconHands}
									alt='icon'
								/>
								If you want the same →
								<a
									className='details-stages__span--link'
									href='https://developer.mozilla.org'
								>
									hi.kovaldesigner@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='details-section details-section__white'>
				<Link to='/details-3' onClick={navigateAndReset}>
					<div className='details-btn-next'>
						<p className='details-btn-next--text'>NEXT CASE</p>
						<img
							className='details-btn-next--img'
							src={RightArrowWhite}
							alt='icon'
						/>
					</div>
				</Link>
			</div>
			<Footer />
		</div>
	);
}

export default Case2;
