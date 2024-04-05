import React from 'react';
import { GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};

function generateRandom() {
	return Math.random() * 10000000000000000;
}

function Map() {
	return (
		<div className="Map">
			<LoadScript googleMapsApiKey="AIzaSyC8NppbeRAKx4bpUqCVxc87Z-DASLD_p_Q">
				<GoogleMap
					center={{ lat: 48.864299358962384, lng: 2.317224049999984 }}
					mapContainerStyle={mapContainerStyle}
					zoom={4}
					mapTypeId={'terrain'}
				>
					<KmlLayer
						url={
							'https://www.google.com/maps/d/kml?mid=1P48djcvHMrsTCnHH5ZYjNB2J4Yiz73E' +
							'&ver=' +
							generateRandom()
						}
						options={{ preserveViewport: true, suppressInfoWindows: true }}
					/>
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default Map;
