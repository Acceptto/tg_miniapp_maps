// App.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Community from './Community';
import Map from './Map';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/community" element={<Community />} />
					<Route path="/map" element={<Map />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
