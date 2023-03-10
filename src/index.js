import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './assets/fonts/TeX-Gyre-Heros/texgyreheros-bold.otf';
import './assets/fonts/TeX-Gyre-Heros/texgyreheros-regular.otf';
import './index.css';
import { store, persistor } from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
);
