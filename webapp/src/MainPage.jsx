import { useQuery } from '@tanstack/react-query';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { initMiniApp } from './api';
import { FixedLayout, SegmentedControl } from '@xelene/tgui';
import Community from './Community';
import Friends from './Friends';

function MainPage() {
	const { ready, initData, backgroundColor } = useWebApp();
	const [selected, setSelected] = useState('community');

	useEffect(() => {
		ready();
	}, [ready]);

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
			<div style={{ backgroundColor }}>
				<div>Loading</div>
			</div>
		);
	}

	if (initResult.isError) {
		return <div>Error! Try reloading the app</div>;
	}

	const renderContent = () => {
		switch (selected) {
			case 'community':
				return <Community token={token} />;
			case 'friends':
				return <Friends token={token} />;
			default:
				return null;
		}
	};

	const labels = [
		{
			label: 'Community',
			value: 'community',
		},
		{
			label: 'You&Friends',
			value: 'friends',
		},
	];

	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<FixedLayout vertical="top" style={{ zIndex: 1, backgroundColor }}>
				<SegmentedControl style={{ maxWidth: 400, margin: '0 auto' }}>
					{labels.map(({ value, label }) => (
						<SegmentedControl.Item
							key={value}
							selected={selected === value}
							onClick={() => setSelected(value)}
						>
							{label}
						</SegmentedControl.Item>
					))}
				</SegmentedControl>
			</FixedLayout>
			<div
				style={{
					flex: 1,
					overflowY: 'auto',
					paddingTop: 72, // Add some padding to avoid overlap
				}}
			>
				{renderContent()}
			</div>
		</div>
	);
}

export default MainPage;
