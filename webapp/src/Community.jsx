import { useState } from 'react';
import { Banner, Image, Button } from '@xelene/tgui';

const Community = () => {
	const bannersData = [
		{
			id: 1,
			header: 'Map of shipwrecks around the world',
			subheader: 'by Dimitri',
			before: <Image size={48} />,
			children: <Button size="s">Try it out</Button>,
			background: 'var(--tgui--secondary_bg_color)',
		},
		{
			id: 2,
			header: 'Paris with Iryna',
			subheader: 'by Iryna',
			before: <Image size={48} />, // Assuming you have avatar URLs
			children: <Button size="s">Try it out</Button>,
		},
	];

	return (
		<div>
			{bannersData.map(banner => (
				<div key={banner.id} style={{ marginBottom: 16 }}>
					<Banner type="section" {...banner}></Banner>
				</div>
			))}
		</div>
	);
};

export default Community;
