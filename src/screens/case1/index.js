import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import AnimCursor from '../../components/animCursor';

import Img1 from '../../assets/img/case1/img1.png';
import Img2 from '../../assets/img/case1/img2.png';
import Img3 from '../../assets/img/case1/img3.png';
import Img4 from '../../assets/img/case1/img4.png';
import Img5 from '../../assets/img/case1/img5.png';
import Img6 from '../../assets/img/case1/img6.png';
import Img7 from '../../assets/img/case1/img7.png';
import Img8 from '../../assets/img/case1/img8.png';

import RightArrowWhite from '../../assets/img/svg/rightArrowWhite.svg';
import SmileIconHands from '../../assets/img/svg/smileIconHands.svg';

import '../../utils/case-global.scss';
import './styles.scss';
import { useNavigateToTop } from '../../utils/useNavigateToTop';
import { changeNavBg } from '../../utils/headerScroll';

function Case1() {
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
		navigateToTop('/details-2');
	};

	return (
		<div className='details-wrapper'>
			<AnimCursor />
			<Header headerBg={headerBg} />
			<div className='details-container'>
				<div className='details-section details-section-img line-height-0 details-section__white'>
					<img className='details-img' src={Img1} alt='logo' />
				</div>
				<div className='details-section details-section__black'>
					<div className='details-description'>
						<div className='details-description__item'>
							<h1 className='details-description__title'>team/role</h1>
							<p className='details-description__text'>
								The team consisted of a designer, a development team and a
								manager who represented the interests of the client.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Product</h1>
							<p className='details-description__text'>
								BB&L is the market leader in beauty services in the UK. They
								provide the masters with cosmetics and training materials.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Process</h1>
							<p className='details-description__text'>
								In this project, the main task was to create a section for the
								sale of goods and a convenient platform for learning.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>WHAT I DELIVERED</h1>
							<p className='details-description__text'>
								As a result, the client received one mobile application that
								combines the above functions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='details-section details-section__white'>
				<img className='details-img mb-medium' src={Img2} alt='logo' />
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
									THE FIRST STAGE
								</span>{' '}
								a training platform was created in the form of a mobile
								application, since before that the client already had a website
								for sales. Therefore, it was educational materials that were a
								priority.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE SECOND STAGE
								</span>{' '}
								the wishes of students who had the need to save materials and
								plan lessons were taken.
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
									THE THIRD STAGE
								</span>{' '}
								a section for the sale of beauty products has been added to the
								mobile application for the faster purchases. It was also
								possible to add only verified reviews after making a
								transaction.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>AS A RESULT</span>{' '}
								the client received a handy application for lessons that will
								help increase sales in the future by demonstrating products in
								training materials (lessons and streams) and mentioning links to
								products in videos.
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
									href='mailto:hi.kovaldesigner@gmail.com'
								>
									hi.kovaldesigner@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='details-section details-section__white'>
				<Link to='/details-2' onClick={navigateAndReset}>
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

export default Case1;
