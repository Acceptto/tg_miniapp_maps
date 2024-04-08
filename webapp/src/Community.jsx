import { useState } from 'react';
import { Banner, Image, Button } from '@xelene/tgui';

const Community = () => {
	const bannersData = [
		{
			id: 1,
			header: 'Map of shipwrecks around the world',
			subheader: 'by Dimitri',
			before: <Image size={48} />,
			children: (
				<React.Fragment key=".0">
					<Button size="s">Try it out</Button>
					<Button mode="plain" size="s">
						Maybe later
					</Button>
				</React.Fragment>
			),
		},
		{
			id: 2,
			header: 'Paris with Iryna',
			subheader: 'by Iryna',
			before: <Image size={48} />, // Assuming you have avatar URLs
			children: (
				<React.Fragment key=".0">
					<Button size="s">Try it out</Button>
					<Button mode="plain" size="s">
						Maybe later
					</Button>
				</React.Fragment>
			),
		},
	];

	return (
		<div>
			{bannersData.map(banner => (
				<div key={banner.id} style={{ marginBottom: 16 }}>
					<Banner type="section" {...banner} />
				</div>
			))}
		</div>
	);
};

export default Community;
