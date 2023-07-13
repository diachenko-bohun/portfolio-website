import React from 'react';
import './styles.scss';
import ReactLogo from '../../assets/img/svg/logo.svg';
import { Link } from 'react-router-dom';
import { useNavigateToTop } from '../../utils/useNavigateToTop';

function Header({ headerBg }) {
	const navigateToTop = useNavigateToTop();

	const navigateAndReset = event => {
		event.preventDefault();
		navigateToTop('/');
	};
	return (
		<div
			className='header'
			style={{ backgroundColor: headerBg ? '#fff' : 'transparent' }}
		>
			<Link to='/' onClick={navigateAndReset}>
				<img className='header-logo' src={ReactLogo} alt='logo' />
			</Link>
			<a className='header-link' href='https://developer.mozilla.org'>
				LET’S TALK
			</a>
		</div>
	);
}

export default Header;
