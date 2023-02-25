import React from 'react';
import './styles.scss';

function Loader() {
	return (
		<div className='loader-container'>
			<div class='loading'>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
				<div class='loading__square'></div>
			</div>
		</div>
	);
}

export default Loader;
