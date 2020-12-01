import initialState from '../initialState';
import React from 'react';

import Products from '../components/Products';
interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
const products: ProductsObject[] = initialState.products;

const Home = (): JSX.Element => {
  return (
    <>
      <Products productsList={products} />
    </>
  );
};

export default Home;
