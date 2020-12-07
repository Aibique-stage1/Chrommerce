import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Location } from '../types/app';

const GM_TOKEN: string = process.env.GOOGLE_MAPS_TOKEN || '';

const Map: (data: { data: Location }) => JSX.Element = ({ data }) => {
  const mapStyles = {
    height: '58vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey={GM_TOKEN}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
