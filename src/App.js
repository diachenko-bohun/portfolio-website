import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './screens/details';
import Home from './screens/home';
import Password from './screens/password';
import { useSelector } from 'react-redux';

function App() {
	const casesStore = useSelector(state => state.cases);

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/password/:id' element={<Password />} />
				{casesStore.access && (
					<Route path='/details/:id' element={<Details />} />
				)}
			</Routes>
		</Router>
	);
}

export default App;
