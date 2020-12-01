import React from 'react';

const Payment = (): JSX.Element => {
  return (
    <>
      <div className="Payment-content">
        <h3>Your item:</h3>
        <button type="button" className="Payment-button">
          Paypal Button
        </button>
      </div>
      <div></div>
    </>
  );
};

export default Payment;
