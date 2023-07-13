import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	access: false,
};

export const accessSlice = createSlice({
	name: 'access',
	initialState,
	reducers: {
		setAccess: (state, action) => {
			state.access = action.payload;
		},
	},
});

// this is for dispatch
export const { setAccess } = accessSlice.actions;

// this is for configureStore
export default accessSlice.reducer;
