import { useState } from 'react';
import initialState from '../initialState';
import { ObjectItem, UseInitializeReturn, ObjectBuyer, ObjectOrder } from '../types/app';

const useInitialState = (): UseInitializeReturn => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: ObjectItem) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (_payload: ObjectItem, indexToRemove: number) => {
    setState({
      ...state,
      cart: state?.cart?.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
    });
  };
  const addToBuyer = (payload: ObjectBuyer) => {
    setState({
      ...state,
      buyer: payload,
    });
  };
  const addNewOrder = (payload: ObjectOrder) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
