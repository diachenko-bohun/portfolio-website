import React from 'react';
import './styles.scss';
import ReactLogo from '../../assets/img/svg/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img className='header-logo' src={ReactLogo} alt='logo' />
			</Link>
			<a className='header-link' href='https://developer.mozilla.org'>
				LET’S TALK
			</a>
		</div>
	);
}

export default Header;
