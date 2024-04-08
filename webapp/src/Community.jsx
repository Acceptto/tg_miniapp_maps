// Community.jsx
import { Banner, Image, Button, List } from '@xelene/tgui';

const Community = () => {
	return (
		<List
			style={{
				background: 'var(--tgui--secondary_bg_color)', // Optional for horizontal alignment
			}}
		>
			{bannersData.map(banner => (
				<Banner
					key={banner.id}
					type="section"
					style={{ marginBottom: 16, textAlign: 'left' }}
					{...banner}
				></Banner>
			))}
		</List>
	);
};

const bannersData = [
	{
		id: 1,
		header: 'Map of shipwrecks around the world',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/color/48/viking-ship.png" />,
		children: <Button size="s">View map</Button>,
	},
	{
		id: 2,
		header: 'Paris with Iryna',
		subheader: 'by Iryna',
		before: <Image size={48} src="https://img.icons8.com/color/48/eiffel-tower.png" />,
		children: <Button size="s">View map</Button>,
	},
	{
		id: 3,
		header: 'Porto wine map',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/cute-clipart/64/wine.png" />,
		children: <Button size="s">View map</Button>,
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
	},
	{
		id: 5,
		header: 'Budapest desserts',
		subheader: 'by Iryna',
		before: <Image size={48} src="https://img.icons8.com/fluency/48/budapest.png" />,
		children: <Button size="s">View map</Button>,
	},
];

export default Community;
