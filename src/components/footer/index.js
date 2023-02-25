import React from 'react';
import './styles.scss';
import ReactLogo from '../../assets/img/svg/logo.svg';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-col'>
				<p className='footer-text'>Contact</p>
				<a className='footer-link' href='https://developer.mozilla.org'>
					HI.kovaldesigner@gmail.com
				</a>
			</div>
			<div className='footer-col'>
				<div className='footer-col__inner'>
					<a className='footer-link' href='https://developer.mozilla.org'>
						Linkedin
					</a>
					<a className='footer-link' href='https://developer.mozilla.org'>
						Instagram
					</a>
				</div>
				<div className='footer-col__inner'>
					<a className='footer-link' href='https://developer.mozilla.org'>
						UXPUB
					</a>
					<p className='footer-span'>©me.2023</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
