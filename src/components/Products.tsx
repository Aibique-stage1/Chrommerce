import React from 'react';

import Product from './Product';

interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Products: React.FunctionComponent<{ productsList: ProductsObject[] }> = ({ productsList }): JSX.Element => {
  return (
    <>
      {productsList.map((product: ProductsObject) => {
        return <Product key={product.id} productItem={product} />;
      })}
    </>
  );
};

export default Products;
