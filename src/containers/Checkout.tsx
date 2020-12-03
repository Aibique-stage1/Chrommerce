import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface AppState {
  cart?: ProductsObject[];
  products?: ProductsObject[];
}
interface Cart {
  state?: AppState;
  removeFromCart?: (product: ProductsObject, i: number) => ProductsObject[];
}

const Checkout: React.FunctionComponent = () => {
  const { state = {}, removeFromCart } = useContext<Cart>(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (product: ProductsObject, i: number) => {
    if (removeFromCart) {
      removeFromCart(product, i);
      alert(JSON.stringify(cart, null, 2));
    }
  };

  const handleSumTotal = () => {
    if (cart) {
      const reducer = (accumulator: number, currentValue: { price: number }): number =>
        accumulator + currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum;
    }
  };

  return (
    <>
      <div className="Checkout-content">
        {cart && cart.length > 0 ? <h3>List items</h3> : <h3>No items selected</h3>}
        {cart &&
          cart.map((item, i) => (
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
          <h3>`Total Price: $ ${handleSumTotal()}`</h3>
          <Link to="/checkout/information">
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
