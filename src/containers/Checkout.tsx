import React from 'react';

const Checkout = (): JSX.Element => {
  return (
    <>
      <div className="Checkout-content">
        Items list:
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>10$</span>
          </div>
          <button type="button">Remove</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Total price: 10$</h3>
        <button type="button">Continue</button>
      </div>
    </>
  );
};

export default Checkout;
