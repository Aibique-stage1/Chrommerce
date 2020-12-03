import { useState } from 'react';
import initialState from '../initialState';

interface StateObject {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface AppState {
  cart?: StateObject[];
  products?: StateObject[];
}

interface InitState {
  addToCart: (payload: StateObject) => void;
  removeFromCart: (payload: StateObject, indexToRemove: number) => void;
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

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
