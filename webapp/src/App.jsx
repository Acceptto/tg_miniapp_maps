import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Map from './Map';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/map" element={<Map />} />
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
