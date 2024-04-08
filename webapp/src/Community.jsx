import { useState } from 'react';
import { Banner, Image, Button, List } from '@xelene/tgui';

const Community = () => {
	const bannersData = [
		{
			id: 1,
			header: 'Map of shipwrecks around the world',
			subheader: 'by Dimitri',
			before: <Image size={48} />,
			children: <Button size="s">Try it out</Button>,
		},
		{
			id: 2,
			header: 'Paris with Iryna',
			subheader: 'by Iryna',
			before: <Image size={48} />,
			children: <Button size="s">Try it out</Button>,
		},
	];

	return (
		<List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
			{bannersData.map(banner => (
				<Banner
					key={banner.id}
					type="section"
					style={{ marginBottom: 16, textAlign: 'left' }}
					{...banner}
				/>
			))}
		</List>
	);
};

export default Community;
