import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import casesReducer from '../redux/casesSlice';
import accessSlice from '../redux/accessSlice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['access'],
	blacklist: ['cases'],
};

const casesPersistConfig = {
	key: 'cases',
	blacklist: ['cases'],
};

const accessPersistConfig = {
	key: 'access',
	storage,
	whitelist: ['access'],
};

const rootReducer = combineReducers({
	cases: casesReducer,
	access: persistReducer(accessPersistConfig, accessSlice),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
