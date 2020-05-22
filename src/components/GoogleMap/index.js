import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import config from '../../config';

const MapComponent = withScriptjs(
  withGoogleMap(({ originalMarker, originalLat, originalLong, playerLat, playerLong, onMapClick, deleteMarker }) => (
    <GoogleMap
      options={{
        styles: config.mapStyles,
      }}
      defaultZoom={4}
      defaultCenter={{ lat: 53.893009, lng: 27.567444 }}
      onClick={onMapClick}
    >
      <>
        {originalMarker && <Marker label="original" position={{ lat: +originalLat, lng: +originalLong }} />}
        {!!playerLat && (
          <Marker onClick={deleteMarker} label="player" position={{ lat: +playerLat, lng: +playerLong }} />
        )}
      </>
    </GoogleMap>
  )),
);

export default MapComponent;
