import { useState, useEffect } from 'react';
import axios from 'axios';
import { Location } from '../types/app';

const GM_TOKEN: string = process.env.CHROMMERCE_MAPS_TOKEN || '';

const useGoogleAddress: (address: string | File | null | undefined) => Location = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GM_TOKEN}`;
  console.log(API);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    }
    fetchData();
  }, [API]);
  return map;
};

export default useGoogleAddress;
