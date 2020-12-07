import React, { useContext } from 'react';
import { UseInitializeReturn } from 'types/app';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import { Location } from '../types/app';

const Success: React.FunctionComponent = () => {
  const { state } = useContext<UseInitializeReturn>(AppContext);
  const buyer = state?.buyer;
  const location: Location = useGoogleAddress(buyer?.address);
  console.log(buyer);

  return (
    <>
      <div className="Success-content">
        <h2>{`${buyer?.name}, thanks for your purchase`}</h2>
        <span>The chose item will arrive your address in 4 days to : address</span>
        <Map data={location} />
      </div>
    </>
  );
};

export default Success;
