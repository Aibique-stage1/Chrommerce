import React, { ReactText, useContext } from 'react';
import AppContext from '../context/AppContext';
import { OnCaptureData, PayPalButton, ButtonStylingOptions, PaypalOptions } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import { UseInitializeReturn, ObjectOrder, ObjectItem } from '../types/app';

const CLIENT_ID: string | undefined = process.env.SB_CLIENT_ID_PP;

const Payment: React.FunctionComponent = () => {
  const { state, addNewOrder } = useContext<UseInitializeReturn>(AppContext);
  const cart = state?.cart;
  const buyer = state?.buyer;

  const history = useHistory();

  const handleSumTotal = (): ReactText | undefined => {
    if (cart) {
      const reducer = (accumulator: number, currentValue: { price: number }): number =>
        accumulator + currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum;
    }
  };

  const paypalOptions: PaypalOptions = {
    clientId: `${CLIENT_ID}`,
    intent: 'capture',
    currency: 'EUR',
  };
  const buttonStyles: ButtonStylingOptions = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSuccessPayment = (data: OnCaptureData) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder: ObjectOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      if (addNewOrder) {
        addNewOrder(newOrder);
        history.push('/checkout/success');
      }
    }
  };
  return (
    <>
      <div className="Payment-content">
        {cart && cart.length > 0 ? <h3>Your items:</h3> : <h3>{`No items in your cart :(`}</h3>}
        {cart &&
          cart.map((item: ObjectItem, i: number) => (
            <div key={i}>
              <div>
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        {cart && cart.length > 0 && (
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handleSuccessPayment(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          ></PayPalButton>
        )}
      </div>
    </>
  );
};

export default Payment;
