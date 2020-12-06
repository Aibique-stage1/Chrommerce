import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { UseInitializeReturn, ObjectBuyer, ObjectItem } from '../types/app';

const Information: React.FunctionComponent = () => {
  const { state, addToBuyer } = useContext<UseInitializeReturn>(AppContext);
  const cart = state?.cart;

  const form = useRef<HTMLFormElement>(null);
  const history = useHistory();

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
        history.push('/checkout/payment');
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
          cart.map((_item: ObjectItem) => {
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
