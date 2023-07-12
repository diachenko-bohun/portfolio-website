import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss';

import AOS from 'aos';

import 'aos/dist/aos.css';
import { useNavigateToTop } from '../../utils/useNavigateToTop';

function Card({ item }) {
	const casesStore = useSelector(state => state.cases);
	const navigateToTop = useNavigateToTop();

	useEffect(() => {
		AOS.init();
	}, []);

	const NavigateTo = casesStore.access
		? `/details-${item.id}`
		: `/password/${item.id}`;

	const navigateAndReset = event => {
		event.preventDefault();
		navigateToTop(NavigateTo);
	};

	return (
		<div className='card' data-aos='zoom-in'>
			<Link to={NavigateTo} onClick={navigateAndReset}>
				<img className='card-img' src={item.img} alt='img' />
			</Link>
			<div className='card-inner'>
				<div>
					<Link to={NavigateTo} onClick={navigateAndReset}>
						<h3 className='card-title'>{item.title}</h3>
					</Link>
					<p className='card-subtitle'>{item.subtitle}</p>
				</div>
				<p className='card-year'>{item.year}</p>
			</div>
		</div>
	);
}

export default Card;
