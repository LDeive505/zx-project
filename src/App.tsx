import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<h1>About</h1>} />
				<Route path="*" element={<h1>Error 404</h1>} />
			</Routes>
		</div>
	);
}

export default App;
