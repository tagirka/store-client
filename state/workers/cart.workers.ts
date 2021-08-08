import { CartItemType, CartStateType } from '../../types';

export interface GetItemIdCartProps {
  idItem: string;
  idDepth: string;
  idSize: string;
}

export interface CartWorkersType {
  getItemIdCart: (data: GetItemIdCartProps) => string;
  addItem: (data: CartStateType, item: CartItemType) => CartStateType;
  inc: (data: CartStateType, item: CartItemType) => CartStateType;
  dec: (data: CartStateType, item: CartItemType) => CartStateType;
  remove: (data: CartStateType, item: CartItemType) => CartStateType;
  cartAllCalc: (cart: CartStateType) => CartStateType;
}

type Sign = 1 | -1;

const recalculate = (cartItems: CartItemType[], id: string, sign: Sign = 1): CartItemType[] => {
  const idx = cartItems.findIndex((c) => c.id === id);

  if (idx === undefined) return cartItems;

  const newCart = [...cartItems];
  const currentItem = cartItems[idx];

  newCart[idx] = {
    ...currentItem,
    count: currentItem.count + sign <= 0 ? 0 : currentItem.count + sign,
    total: currentItem.count + sign <= 0 ? 0 : +(currentItem.cost * (currentItem.count + sign)).toFixed(2),
  };

  return newCart;
};

export const CartWorkers: CartWorkersType = {
  getItemIdCart: ({ idItem, idDepth, idSize }: GetItemIdCartProps): string => {
    return `I_${idItem}_D_${idDepth}_S_${idSize}`;
  },

  addItem: ({ cartItems, total }: CartStateType, item: CartItemType) => {
    cartItems = [
      ...cartItems,
      {
        ...item,
        id: CartWorkers.getItemIdCart({
          idItem: item.itemId,
          idDepth: item.depth,
          idSize: item.size,
        }),
      },
    ];

    return CartWorkers.cartAllCalc({ cartItems, total });
  },

  inc: ({ cartItems, total }: CartStateType, item) => {
    return CartWorkers.cartAllCalc({
      cartItems: recalculate(cartItems, <string>item.id),
      total,
    });
  },

  dec: ({ cartItems, total }: CartStateType, item) => {
    const newCart = recalculate(cartItems, <string>item.id, -1);

    return CartWorkers.cartAllCalc({
      cartItems: newCart,
      total,
    });
  },

  remove: ({ cartItems, total }: CartStateType, item) => {
    return CartWorkers.cartAllCalc({
      cartItems: cartItems.filter((c) => c.id !== item.id),
      total,
    });
  },

  cartAllCalc: (cart) => {
    const { cartItems } = cart;

    const newItems = cartItems.reduce((arr, cur) => {
      const idx = arr.findIndex((a) => a.id === cur.id);

      if (idx > -1) {
        const correctItem = arr[idx];

        arr[idx] = {
          ...correctItem,
          count: correctItem.count + cur.count,
          total: correctItem.total + cur.total,
        };

        return arr;
      } else {
        return [...arr, cur];
      }
    }, [] as CartItemType[]);

    const count = newItems.reduce((arr, cur) => {
      return +(arr + cur.count).toFixed(2);
    }, 0);

    const sum = newItems.reduce((arr, cur) => {
      return +(arr + cur.total).toFixed(2);
    }, 0);

    return { cartItems: newItems, total: { count, sum } };
  },
};
