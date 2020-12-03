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
}

const Header = (): JSX.Element => {
  const { state = {} } = useContext<Cart>(AppContext);
  const { cart } = state;
  return (
    <>
      <span>
        <Link to="/">Chrommerce</Link>
      </span>
      <div>
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart && cart.length > 0 && <div>{cart.length}</div>}
      </div>
    </>
  );
};

export default Header;
