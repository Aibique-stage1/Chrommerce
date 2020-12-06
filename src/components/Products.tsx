import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Product from './Product';

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
  addToCart?: (product: ProductsObject) => void;
}

const Products: React.FunctionComponent = () => {
  const { state = {}, addToCart } = useContext<Cart>(AppContext);
  const { products } = state;

  const handleAddToCart = (product: ProductsObject) => {
    if (addToCart) {
      addToCart(product);
    }
  };
  return (
    <>
      {products &&
        products.map((product: ProductsObject) => {
          return <Product key={product.id} productItem={product} handleAddToCart={handleAddToCart} />;
        })}
    </>
  );
};

export default Products;
