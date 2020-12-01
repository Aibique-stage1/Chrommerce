import React from 'react';

interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Product: React.FunctionComponent<{ productItem: ProductsObject }> = ({ productItem }): JSX.Element => {
  return (
    <>
      <img src={productItem.image} alt={productItem.title} />
      <div className="content">
        <h2>{productItem.title}</h2>
        <span>{productItem.price}</span>
        <p>{productItem.description}</p>
      </div>
    </>
  );
};

export default Product;
