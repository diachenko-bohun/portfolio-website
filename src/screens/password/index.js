import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

import Container from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';

import RightArrow from '../../assets/img/svg/rightArrow.svg';

import './styles.scss';
import AnimCursor from '../../components/animCursor';
import { setAccess } from '../../redux/casesSlice';
import { useDispatch } from 'react-redux';

function Password() {
	const { id } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const passwordChangeHandler = e => {
		setError(false);
		setPassword(e.target.value);
	};

	const passwordBtnClick = () => {
		if (password !== '123') {
			setError(true);
		} else {
			setPassword('');
			dispatch(setAccess(true));
			navigate(`/details/${id}`);
			console.log('success!!!');
		}
	};
	return (
		<div className='password-wrapper'>
			<AnimCursor />
			<Header />
			<Container>
				<div className='password-inner'>
					<h4 className='password-title'>Glad to see you here ☺️ </h4>
					<div className='password-field'>
						<input
							className='password-input'
							type='text'
							required
							onChange={passwordChangeHandler}
							value={password}
						/>
						{error && <p className='password-error'>💔 wrong password</p>}
						<button className='password-btn' onClick={passwordBtnClick}>
							<img className='password-btn__icon' src={RightArrow} alt='logo' />
						</button>
					</div>

					<span className='password-span'>
						* If you don't have a password but would like to see <br /> my
						cases, write to me from your work email:
					</span>
					<div className='password-mail'>
						<a
							className='password-mail__link'
							href='https://developer.mozilla.org'
						>
							hi.kovaldesigner@gmail.com
						</a>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Password;
