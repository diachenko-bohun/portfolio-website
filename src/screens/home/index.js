import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/container';
import List from '../../components/list';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AnimCursor from '../../components/animCursor';
import Loader from '../../components/loader';

import PeopleIcon from '../../assets/img/svg/peopleIcon.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.scss';

function Home() {
	const [loader, setLoader] = useState(false);
	const casesStore = useSelector(state => state.cases);

	console.log('casesStore', casesStore);

	useEffect(() => {
		AOS.init();
	}, []);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setLoader(false);
	// 	}, 3000);
	// 	return () => clearTimeout(timer);
	// }, []);

	if (loader) {
		return <Loader />;
	} else {
		return (
			<div className='home-wrapper'>
				<AnimCursor />
				<Header />
				<Container>
					<div
						className='about-wrapper'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'
					>
						<p className='about-text'>
							I’m a UI/UX Designer with 3+ years of professional experience
							<br />
							Everything you see here is made by a human for
							<span className='about-span'>users</span>
							PEOPLE
							<img className='about-img' src={PeopleIcon} alt='icon' />
						</p>
					</div>
					<List data={casesStore.list} />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default Home;
