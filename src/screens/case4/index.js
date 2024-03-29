import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import AnimCursor from '../../components/animCursor';

import Img1 from '../../assets/img/case4/img1.png';
import Img2 from '../../assets/img/case4/img2.png';
import Img3 from '../../assets/img/case4/img3.png';
import Img4 from '../../assets/img/case4/img4.png';
import Img5 from '../../assets/img/case4/img5.png';
import Img6 from '../../assets/img/case4/img6.png';
import Img7 from '../../assets/img/case4/img7.png';
import Img8 from '../../assets/img/case4/img8.png';
import Img9 from '../../assets/img/case4/img9.png';

import RightArrowWhite from '../../assets/img/svg/rightArrowWhite.svg';
import SmileIconHands from '../../assets/img/svg/smileIconHands.svg';

import '../../utils/case-global.scss';
import './styles.scss';
import { useNavigateToTop } from '../../utils/useNavigateToTop';
import { changeNavBg } from '../../utils/headerScroll';

function Case4() {
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
		navigateToTop('/details-1');
	};
	return (
		<div className='details-wrapper'>
			<AnimCursor />
			<Header headerBg={headerBg} />
			<div className='details-container'>
				<div className='details-section line-height-0 details-section__white'>
					<img className='details-img' src={Img1} alt='logo' />
				</div>
				<div className='details-section details-section__black'>
					<div className='details-description'>
						<div className='details-description__item'>
							<h1 className='details-description__title'>team/role</h1>
							<p className='details-description__text'>
								The project was carried out on outsourcing conditions together
								with the customer and representatives of the local clinic.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Product</h1>
							<p className='details-description__text'>
								Rentgen.me was created during the covid period for remote x-ray
								diagnostics and pneumonia testing.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>Process</h1>
							<p className='details-description__text'>
								In the process of work, it was decided to create a site starting
								with a mobile version for quick file exchange between a patient
								and a doctor.
							</p>
						</div>
						<div className='details-description__item'>
							<h1 className='details-description__title'>WHAT I DELIVERED</h1>
							<p className='details-description__text'>
								As a result, two versions of the site were presented. First
								version for typical users and doctor's version.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='details-section details-section__white'>
				<img className='details-img mb-medium' src={Img2} alt='logo' />
			</div>

			<div className='details-section details-section__white details-section__multyImg'>
				<img className='details-img__multy mb-large' src={Img3} alt='logo' />
				<img className='details-img__multy mb-large' src={Img4} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<div className='details-stages'>
					<div className='details-stages__inner'>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE FIRST STAGE
								</span>{' '}
								mobile version of the site was created you can familiarise
								yourself with the conditions for processing scans, choose a
								doctor and upload a scan.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='details-section details-section__white details-section__multyImg'>
				<img className='details-img__multy mb-medium' src={Img5} alt='logo' />
				<img className='details-img__multy mb-medium' src={Img6} alt='logo' />
			</div>

			<div className='details-section details-section__white details-section__multyImg'>
				<img className='details-img__multy mb-medium' src={Img7} alt='logo' />
				<img className='details-img__multy mb-medium' src={Img8} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<img className='details-img mb-large' src={Img9} alt='logo' />
			</div>

			<div className='details-section details-section__white'>
				<div className='details-stages'>
					<div className='details-stages__inner'>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>
									THE SECOND STAGE
								</span>{' '}
								attention was paid to the section of communication with the
								doctor.Thus, after receiving the results, the patient can ask
								the doctor a question and get a referral or consultation.
							</p>
						</div>
						<div className='details-stages__item'>
							<p className='details-stages__text'>
								<span className='details-stages__text--bold'>AS A RESULT</span>{' '}
								a convenient platform was created a convenient platform was
								created for interaction between the doctor and the patient in a
								mobile mode and with the ability to track the process of
								obtaining diagnostic results. In addition, the site has the
								opportunity to get detailed advice.
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
				<Link to='/details-1' onClick={navigateAndReset}>
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

export default Case4;
