import React from 'react';

interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface Cart {
  productItem: ProductsObject;
  handleAddToCart: (productItem: ProductsObject) => void;
}

const Product: React.FunctionComponent<Cart> = ({ productItem, handleAddToCart }): JSX.Element => {
  return (
    <>
      <img src={productItem.image} alt={productItem.title} />
      <div className="content">
        <h2>{productItem.title}</h2>
        <span>{productItem.price}</span>
        <p>{productItem.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(productItem)}>
        Add to cart
      </button>
    </>
  );
};

export default Product;
