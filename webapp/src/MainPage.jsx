import { useQuery } from '@tanstack/react-query';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';
import 'react-day-picker/dist/style.css';
import { initMiniApp } from './api';
import Segment from './Segment.jsx';

function MainPage() {
	const { ready, initData, backgroundColor } = useWebApp();

	useEffect(() => {
		ready();
	});

	const initResult = useQuery({
		queryKey: ['initData'],
		queryFn: async () => {
			const result = await initMiniApp(initData);
			return result;
		},
	});

	const { token, startParam } = initResult?.data || {};

	if (initResult.isLoading) {
		return (
			<div
				style={{
					backgroundColor,
				}}
			>
				<div>Loading</div>
			</div>
		);
	}
	if (initResult.isError) {
		return <div>Error! Try reloading the app</div>;
	}

	return <Segment token={token} />;
}

export default MainPage;
