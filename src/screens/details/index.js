import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';
import AnimCursor from '../../components/animCursor';

import RightArrow from '../../assets/img/svg/rightArrow.svg';

import './styles.scss';

function Details() {
	const navigate = useNavigate();

	const passwordBtnClick = () => {
		navigate('/');
	};
	return (
		<div className='details-wrapper'>
			<AnimCursor />
			<Header />
			<Container>
				<div className='details-inner'>Details</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Details;
