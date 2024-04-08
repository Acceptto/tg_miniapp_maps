import { useState } from 'react';
import { Banner, Button, Image } from '@xelene/tgui';

const Community = () => {
	const bannersData = [
		{
			before: <Image size={48} />,
			id: 1,
			header: 'Map of shipwrecks around the world',
			subheader: 'by Dimitri',
			children: (
				<>
					<Button size="s">Open</Button>
				</>
			),
		},
		{
			before: <Image size={48} />,
			id: 2,
			header: 'Paris for coffe lovers',
			subheader: 'by Iryna',
			children: (
				<>
					<Button size="s">Open</Button>
				</>
			),
		},
		{
			before: <Image size={48} />,
			id: 3,
			header: 'Porto as a wine adventure',
			subheader: 'by Alex',
			children: (
				<>
					<Button size="s">Open</Button>
				</>
			),
		},
	];

	return (
		<div>
			{bannersData.map(banner => (
				<div key={banner.id} style={{ marginBottom: 16 }}>
					{' '}
					{/* Added margin for spacing */}
					<Banner type="section" {...banner} />
				</div>
			))}
		</div>
	);
};

export default Community;
