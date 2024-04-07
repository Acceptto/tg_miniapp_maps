import { useState } from 'react';
import { Tabbar } from '@xelene/tgui';

const BottomTabbar = () => {
	const [currentTab, setCurrentTab] = useState(0);

	const tabs = [
		{ id: 0, text: 'Devices' },
		{ id: 1, text: 'Chat' },
		{ id: 2, text: 'Stats' },
	];

	return (
		<Tabbar>
			{tabs.map(({ id, text }) => (
				<Tabbar.Item
					key={id}
					text={text}
					selected={id === currentTab}
					onClick={() => setCurrentTab(id)}
				></Tabbar.Item>
			))}
		</Tabbar>
	);
};
