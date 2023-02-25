import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import casesReducer from '../redux/casesSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cases'],
};

const casesPersistConfig = {
	key: 'cases',
	storage,
	whitelist: ['cases'],
};

const rootReducer = combineReducers({
	cases: persistReducer(casesPersistConfig, casesReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
