import { OnCaptureData } from 'react-paypal-button';

export interface ObjectOrder {
  buyer?: ObjectBuyer | null;
  products?: ObjectItem[];
  payment: OnCaptureData;
}

export interface ObjectItem {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}
export interface ObjectBuyer {
  name: string | File | null;
  email: string | File | null;
  address: string | File | null;
  apt: string | File | null;
  country: string | File | null;
  state: string | File | null;
  pc: string | File | null;
  city: string | File | null;
  phone: string | File | null;
}
export interface AppState {
  cart: ObjectItem[];
  buyer: ObjectBuyer | null;
  orders: ObjectOrder[] | [];
  products: ObjectItem[];
}

export interface UseInitializeReturn {
  state?: AppState;
  addToCart?: (payload: ObjectItem) => void;
  removeFromCart?: (item: ObjectItem, i: number) => void;
  addToBuyer?: (payload: ObjectBuyer) => void;
  addNewOrder?: (payload: ObjectOrder) => void;
}
