import React, { Suspense } from 'react';
import { GoogleMap, KmlLayer, useJsApiLoader } from '@react-google-maps/api';

const generateRandom = () => {
	return Math.random() * 10000000000000000;
};

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyC8NppbeRAKx4bpUqCVxc87Z-DASLD_p_Q',
	});

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<GoogleMap
			mapContainerStyle={{ height: '100vh' }}
			center={{ lat: 40.23164130704827, lng: 15.088623999999982 }}
			zoom={2}
			mapTypeId="terrain"
		>
			<KmlLayer
				url={
					'http://www.google.com/maps/d/u/0/kml?mid=1R8Rw7tZTGw3YHKBTNBOh-LKU5sw' +
					'&ver=' +
					generateRandom()
				}
				options={{ preserveViewport: true }}
			/>
		</GoogleMap>
	);
};

export default function MapFailed() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Map />
		</Suspense>
	);
}
