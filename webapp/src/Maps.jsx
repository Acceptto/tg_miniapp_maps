import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from 'react-google-maps';

const Map = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyC8NppbeRAKx4bpUqCVxc87Z-DASLD_p_Q',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100vh` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={2}
		defaultCenter={{ lat: 40.23164130704827, lng: 15.088623999999982 }}
		mapTypeId={'terrain'}
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
));

function generateRandom() {
	return Math.random() * 10000000000000000;
}
export default Map;
