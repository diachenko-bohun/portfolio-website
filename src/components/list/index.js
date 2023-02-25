import React from 'react';
import Card from '../card';
import './styles.scss';

function List({ data }) {
	return (
		<div className='list'>
			{data.map(item => {
				return <Card item={item} key={item?.id} />;
			})}
		</div>
	);
}

export default List;
