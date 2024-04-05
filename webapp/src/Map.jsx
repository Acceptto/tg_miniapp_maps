import React from 'react';
import { GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};

function Map() {
	return (
		<div className="Map">
			<LoadScript googleMapsApiKey="AIzaSyC8NppbeRAKx4bpUqCVxc87Z-DASLD_p_Q">
				<GoogleMap
					center={{ lat: 48.865127, lng: 2.350331 }}
					mapContainerStyle={mapContainerStyle}
					zoom={4}
				>
					<KmlLayer url="https://nightskybrightness.s3.eu-west-3.amazonaws.com/artificialNightSkyBrightness_example.kml" />
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default Map;
