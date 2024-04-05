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
					center={{ lat: 48.865127, lng: 2.350331 }}
					mapContainerStyle={mapContainerStyle}
					zoom={4}
					mapTypeId={'terrain'}
				>
					<KmlLayer
						url={
							'http://www.google.com/maps/d/u/0/kml?mid=1R8Rw7tZTGw3YHKBTNBOh-LKU5sw' +
							'&ver=' +
							generateRandom()
						}
					/>
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default Map;
