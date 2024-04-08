import { Banner, Image, Button, List } from '@xelene/tgui';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Map from './Map';

const Community = () => {
	return (
		<Router>
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
					>
						<Link to="/map">
							<Button size="s">View map</Button>
						</Link>
					</Banner>
				))}
				<Routes>
					<Route path="/map" element={<Map />} />
				</Routes>
			</List>
		</Router>
	);
};

const bannersData = [
	{
		id: 1,
		header: 'Map of shipwrecks around the world',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/color/48/viking-ship.png" />,
	},
	{
		id: 2,
		header: 'Paris with Iryna',
		subheader: 'by Iryna',
		before: <Image size={48} src="https://img.icons8.com/color/48/eiffel-tower.png" />,
	},
	{
		id: 3,
		header: 'Porto wine map',
		subheader: 'by Dimitri',
		before: <Image size={48} src="https://img.icons8.com/cute-clipart/64/wine.png" />,
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
	},
];

export default Community;
