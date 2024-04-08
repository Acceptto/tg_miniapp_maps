import { useQuery } from '@tanstack/react-query';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { initMiniApp } from './api';
import { Flex, SegmentedControl } from '@xelene/tgui';
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
		<Flex
			direction="column"
			style={{
				height: '100vh',
				backgroundColor,
			}}
		>
			<Flex.Item
				style={{
					flexShrink: 0,
					position: 'sticky',
					top: 0,
					zIndex: 1,
					backgroundColor,
					padding: 16,
				}}
			>
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
			</Flex.Item>
			<Flex.Item
				style={{
					flex: 1,
					overflowY: 'auto',
				}}
			>
				{renderContent()}
			</Flex.Item>
		</Flex>
	);
}

export default MainPage;
