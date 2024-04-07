import { useState } from 'react';
import { FixedLayout, Tabbar } from '@xelene/tgui';
import { Icon28Devices } from 'icons/28/chat';
import { Icon28Devices } from 'icons/28/devices';
import { Icon28Devices } from 'icons/28/stats';

const BottomTabbar = () => {
	const [currentTab, setCurrentTab] = useState(0);

	const tabs = [
		{ id: 0, Icon: Icon28Devices, text: 'Devices' },
		{ id: 1, Icon: Icon28Chat, text: 'Chat' },
		{ id: 2, Icon: Icon28Stats, text: 'Stats' },
	];

	return (
		<FixedLayout vertical="bottom">
			<Tabbar>
				{tabs.map(({ id, text, Icon }) => (
					<Tabbar.Item
						key={id}
						text={text}
						selected={id === currentTab}
						onClick={() => setCurrentTab(id)}
					>
						<Icon />
					</Tabbar.Item>
				))}
			</Tabbar>
		</FixedLayout>
	);
};
