import React, { useContext, ReactText } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { ObjectItem, UseInitializeReturn } from '../types/app';

const Checkout: React.FunctionComponent = () => {
  const { state, removeFromCart } = useContext<UseInitializeReturn>(AppContext);
  const cart = state?.cart;

  const handleRemoveFromCart = (product: ObjectItem, i: number) => {
    if (removeFromCart) {
      removeFromCart(product, i);
      alert(JSON.stringify(cart, null, 2));
    }
  };

  const handleSumTotal: () => ReactText | undefined = () => {
    const reducer: (lastPrice: number, item: ObjectItem) => number = (lastPrice, item) => {
      const price = item?.price;
      if (price) {
        return lastPrice + price;
      } else {
        return 0;
      }
    };
    const sum = cart?.reduce(reducer, 0);
    // reduce<number>(callback(previousValue, CurrentObject, index, array), initValue:number)=>:number
    return sum;
  };
  return (
    <>
      <Helmet>
        <title>Checkout | Chrommerce</title>
      </Helmet>
      <div className="Checkout-content">
        {cart && cart.length > 0 ? <h3>List items</h3> : <h3>No items selected</h3>}
        {cart &&
          cart.map((item: ObjectItem, i: number) => (
            <div className="Checkout-item" key={i}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemoveFromCart(item, i)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
      </div>
      {cart && cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>`Total Price: $ ${cart && handleSumTotal()}`</h3>
          <Link to="/checkout/information">
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
