import React from 'react';

const Success = (): JSX.Element => {
  return (
    <>
      <div className="Success-content">
        <h3>Christopher, thanks for your purchase</h3>
        <span>The chose item will arrive your address in 4 days to : address</span>
        <div className="Success-map">Google maps</div>
      </div>
    </>
  );
};

export default Success;
