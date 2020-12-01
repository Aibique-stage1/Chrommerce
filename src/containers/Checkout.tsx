import React from 'react';
import { Link } from 'react-router-dom';

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
          <button type="button">
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Total price: 10$</h3>
        <Link to="/checkout/information">
          <button type="button">Continue</button>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
