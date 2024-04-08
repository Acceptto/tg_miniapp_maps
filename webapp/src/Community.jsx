import { useState } from 'react';
import { Banner, Image, Button, List } from '@xelene/tgui';
import Map from './Map';

const Community = () => {
	const [showMap, setShowMap] = useState(false); // Initialize navigate if using React Router  Initialize navigate if using React Router
	const bannersData = [
		{
			id: 1,
			header: 'Map of shipwrecks around the world',
			subheader: 'by Dimitri',
			before: <Image size={48} src="https://img.icons8.com/color/48/viking-ship.png" />,
			children: (
				<Button size="s" onClick={() => setShowMap(!showMap)}>
					View map
				</Button>
			),
		},
		{
			id: 2,
			header: 'Paris with Iryna',
			subheader: 'by Iryna',
			before: <Image size={48} src="https://img.icons8.com/color/48/eiffel-tower.png" />,
			children: (
				<Button size="s" onClick={() => setShowMap(!showMap)}>
					View map
				</Button>
			),
		},
		{
			id: 3,
			header: 'Porto wine map',
			subheader: 'by Dimitri',
			before: <Image size={48} src="https://img.icons8.com/cute-clipart/64/wine.png" />,
			children: (
				<Button size="s" onClick={() => setShowMap(!showMap)}>
					View map
				</Button>
			),
		},
		{
			id: 4,
			header: 'Fuertoventura beaches',
			subheader: 'by Iryna',
			before: (
				<Image
					size={48}
					src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-beach-tropical-flaticons-lineal-color-flat-icons-5.png"
				/>
			),
			children: (
				<Button size="s" onClick={() => setShowMap(!showMap)}>
					View map
				</Button>
			),
		},
		{
			id: 5,
			header: 'Budapest desserts',
			subheader: 'by Iryna',
			before: <Image size={48} src="https://img.icons8.com/fluency/48/budapest.png" />,
			children: (
				<Button size="s" onClick={() => setShowMap(!showMap)}>
					View map
				</Button>
			),
		},
	];

	return (
		<List
			style={{
				background: 'var(--tgui--secondary_bg_color)', // Optional for horizontal alignment
			}}
		>
			{/* Conditionally render Map component */}
			{showMap && <Map />}
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
