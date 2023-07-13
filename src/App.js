import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Password from './screens/password';
import { useSelector } from 'react-redux';
import Case1 from './screens/case1';
import Case2 from './screens/case2';
import Case3 from './screens/case3';
import Case4 from './screens/case4';

function App() {
	const accessStore = useSelector(state => state.access);

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/password/:id' element={<Password />} />
				{accessStore.access && <Route path='/details-1' element={<Case1 />} />}
				{accessStore.access && <Route path='/details-2' element={<Case2 />} />}
				{accessStore.access && <Route path='/details-3' element={<Case3 />} />}
				{accessStore.access && <Route path='/details-4' element={<Case4 />} />}
			</Routes>
		</Router>
	);
}

export default App;
