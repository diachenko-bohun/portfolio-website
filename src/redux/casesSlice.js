import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: [
		{
			id: 1,
			title: 'Beauty school',
			subtitle: '#mobileapp #b2c #edtech',
			year: 2022,
			img: require('../assets/img/png/itemImg.png'),
		},
		{
			id: 2,
			title: 'MTB Product',
			subtitle: '#webservice #crm #fintech',
			year: 2022,
			img: require('../assets/img/png/itemImg2.png'),
		},
		{
			id: 3,
			title: 'Corrodere Academy',
			subtitle: '#mobileapp #webservise #crm #edtech',
			year: 2021,
			img: require('../assets/img/png/itemImg3.png'),
		},
		{
			id: 4,
			title: 'Rentgen.me',
			subtitle: '#webservice #medtech #b2c',
			year: 2020,
			img: require('../assets/img/png/itemImg4.png'),
		},
	],
};

export const casesSlice = createSlice({
	name: 'cases',
	initialState,
});

// this is for dispatch

// this is for configureStore
export default casesSlice.reducer;
