import { useState } from 'react';
import initialState from '../initialState';

interface StateObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

interface ObjectBuyer {
  name: string | null;
  email: string | null;
  address: string | null;
  apt: string | null;
  country: string | null;
  state: string | null;
  pc: string | null;
  city: string | null;
  phone: string | null;
}
interface AppState {
  cart?: StateObject[];
  buyer?: ObjectBuyer;
  products?: StateObject[];
}

interface InitState {
  addToCart: (payload: StateObject) => void;
  removeFromCart: (payload: StateObject, indexToRemove: number) => void;
  addToBuyer: (payload: ObjectBuyer) => void;
  state: AppState;
}

const useInitialState = (): InitState => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: StateObject) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (_payload: StateObject, indexToRemove: number) => {
    setState({
      ...state,
      cart: state?.cart?.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
    });
  };
  const addToBuyer = (payload: ObjectBuyer) => {
    setState({
      ...state,
      ...(state.buyer = payload),
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  };
};

export default useInitialState;
