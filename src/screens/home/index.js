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
import { changeNavBg } from '../../utils/headerScroll';

function Home() {
	const [loader, setLoader] = useState(false);
	const casesStore = useSelector(state => state.cases);
	const [headerBg, setHeaderBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => changeNavBg(setHeaderBg));
		return () => {
			window.removeEventListener('scroll', () => changeNavBg(setHeaderBg));
		};
	}, []);

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
				<Header headerBg={headerBg} />
				<Container>
					<div
						className='about-wrapper'
						data-aos='fade-right'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'
					>
						<p className='about-text'>
							I’m a UI/UX Designer with 4+ years of professional experience
							<br />
							Everything you see here is made by a human for
							<span className='about-span'>users</span>
							PEOPLE
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
