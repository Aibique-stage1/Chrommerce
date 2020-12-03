import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

interface ProductsObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface ObjectBuyer {
  name: string | null | File;
  email: string | null | File;
  address: string | null | File;
  apt: string | null | File;
  country: string | null | File;
  state: string | null | File;
  pc: string | null | File;
  city: string | null | File;
  phone: string | null | File;
}
interface AppState {
  cart?: ProductsObject[];
  buyer?: ObjectBuyer | null;
  products?: ProductsObject[];
}
interface Cart {
  state?: AppState;
  addToBuyer?: (buyer: ObjectBuyer) => void;
}

const Information: React.FunctionComponent = () => {
  const { state = {}, addToBuyer } = useContext<Cart>(AppContext);
  const { cart } = state;

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (form && form.current) {
      const formData = new FormData(form.current);
      const buyer: ObjectBuyer = {
        name: formData.get('nm'),
        email: formData.get('ml'),
        address: formData.get('ddrss'),
        apt: formData.get('prtmnt'),
        country: formData.get('cntr'),
        state: formData.get('stt'),
        pc: formData.get('pstlcd'),
        city: formData.get('ct'),
        phone: formData.get('phn'),
      };
      if (addToBuyer) {
        addToBuyer(buyer);
      }
    }
  };
  return (
    <>
      <div className="Information-content">
        <div className="Information-head">
          <h3>Contact Form:</h3>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full name" name="nm" />
            <input type="text" placeholder="E-mail" name="ml" />
            <input type="text" placeholder="Address" name="ddrss" />
            <input type="text" placeholder="Apto" name="prtmnt" />
            <input type="text" placeholder="Country" name="cntr" />
            <input type="text" placeholder="State" name="stt" />
            <input type="text" placeholder="Postal Code" name="pstlcd" />
            <input type="text" placeholder="City" name="ct" />
            <input type="text" placeholder="Phone" name="phn" />
          </form>
          <div className="Information-buttons">
            <div>
              <Link to="/checkout">go back</Link>
            </div>
            <button type="button" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>List of items:</h3>
        {cart &&
          cart.map((_item) => {
            <div className="Information-item">
              <div className="Information-element">
                <h4>{_item.title}</h4>
                <span>{_item.price}</span>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default Information;
