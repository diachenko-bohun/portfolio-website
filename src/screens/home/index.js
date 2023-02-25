import React, { useEffect, useState } from 'react';

import Container from '../../components/container';
import List from '../../components/list';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './styles.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimCursor from '../../components/animCursor';
import Loader from '../../components/loader';
import { useSelector } from 'react-redux';

function Home() {
	const [loader, setLoader] = useState(false);
	const casesStore = useSelector(state => state.cases);

	console.log('casesStore', casesStore);

	useEffect(() => {
		AOS.init();
	}, []);

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
							Everything you see here is made by a human for users PEOPLE 👥
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
