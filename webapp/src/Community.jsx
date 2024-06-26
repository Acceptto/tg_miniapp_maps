import { Banner, Image, Button, List } from '@xelene/tgui';

const Community = () => {
	const handleMapClick = mapUrl => {
		window.open(mapUrl, '_blank');
	};

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					flex: 1,
					overflow: 'auto',
					background: 'var(--tgui--secondary_bg_color)',
				}}
			>
				<List>
					{bannersData.map(banner => (
						<Banner
							key={banner.id}
							type="section"
							style={{ marginBottom: 16, textAlign: 'left' }}
							{...banner}
						>
							{banner.children && (
								<Button size="s" onClick={() => handleMapClick(banner.url)}>
									{banner.children}
								</Button>
							)}
						</Banner>
					))}
				</List>
			</div>
		</div>
	);
};

const bannersData = [
	{
		id: 1,
		header: 'Map of shipwrecks around the world',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/color/48/viking-ship.png" />,
		children: 'View map',
		url: 'http://www.google.com/maps/d/u/0/kml?mid=1R8Rw7tZTGw3YHKBTNBOh-LKU5sw',
	},
	{
		id: 2,
		header: 'Paris with Iryna',
		subheader: 'by Iryna',
		before: <Image size={48} src="https://img.icons8.com/color/48/eiffel-tower.png" />,
		children: 'View map',
		url: 'https://www.google.com/maps/d/u/0/viewer?mid=1P48djcvHMrsTCnHH5ZYjNB2J4Yiz73E&ll=48.864299358962384%2C2.317224049999984&z=14',
	},
	{
		id: 3,
		header: 'Porto wine map',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/cute-clipart/64/wine.png" />,
		children: 'View map',
		url: 'https://www.google.com/maps/search/?api=1&query=Porto+wine',
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
		children: 'View map',
		url: 'https://www.google.com/maps/search/?api=1&query=Fuertoventura+beaches',
	},
	{
		id: 5,
		header: 'Budapest desserts',
		subheader: 'by Iryna',
		before: <Image size={48} src="https://img.icons8.com/fluency/48/budapest.png" />,
		children: 'View map',
		url: 'https://guides.apple.com/?ug=CglCdWRhcGVzdCASDgiuTRCLsbvN%2FOWV4MoBEg4Irk0QjcPzvbT04eDGARINCK5NEMej3cf6j4v7WhIOCK5NELaCvsPC36PRlQE%3D',
	},
];

export default Community;
