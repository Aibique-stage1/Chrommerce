interface ObjectState {
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
interface State {
  cart?: ObjectState[];
  buyer?: ObjectBuyer;
  products: ObjectState[];
}

const initialState: State = {
  cart: [],
  buyer: {
    name: null,
    email: null,
    address: null,
    apt: null,
    country: null,
    state: null,
    pc: null,
    city: null,
    phone: null,
  },
  products: [
    {
      id: '1',
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '3',
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '4',
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '5',
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '6',
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '7',
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};

export default initialState;
