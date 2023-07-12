import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigateToTop } from '../../utils/useNavigateToTop';

import Container from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AnimCursor from '../../components/animCursor';

import RightArrowWhite from '../../assets/img/svg/rightArrowWhite.svg';

import './styles.scss';

function Case4() {
	const navigateToTop = useNavigateToTop();

	const navigateAndReset = event => {
		event.preventDefault();
		navigateToTop('/details-1');
	};
	return (
		<div className='details-wrapper'>
			<AnimCursor />
			<Header />
			<Container>
				<div className='details-inner'>Details</div>
			</Container>
			<div className='details-black-section'>
				<Container>
					<div className='details-inner'>Details</div>
				</Container>
			</div>

			<Container>
				<div className='details-inner'>Case4</div>
			</Container>

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
