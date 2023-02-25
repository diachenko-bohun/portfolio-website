import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	access: false,
	list: [
		{
			id: 1,
			title: 'MTB Product',
			subtitle: 'Saas',
			year: 2023,
			img: require('../assets/img/png/itemImg.png'),
		},
		{
			id: 2,
			title: 'Listening Assistant',
			subtitle: ' Mobile App',
			year: 2022,
			img: require('../assets/img/png/itemImg2.png'),
		},
		{
			id: 3,
			title: 'Mobile Banking for child',
			subtitle: 'MOBILE APP',
			year: 2022,
			img: require('../assets/img/png/itemImg3.png'),
		},
		{
			id: 4,
			title: 'Calculate Shop',
			subtitle: 'Web Servise',
			year: 2021,
			img: require('../assets/img/png/itemImg4.png'),
		},
	],
};

export const casesSlice = createSlice({
	name: 'cases',
	initialState,
	reducers: {
		setAccess: (state, action) => {
			state.access = action.payload;
		},
	},
});

// this is for dispatch
export const { setAccess } = casesSlice.actions;

// this is for configureStore
export default casesSlice.reducer;
