import { Reducer } from 'react';
import { AppStateType } from '../app.state/app.state';
import { ActionType, CartActionEnum } from '../app.state/app.actions';
import { CartWorkers } from '../workers/cart.workers';
import { CartItemType } from '../../types';

export const cartReducer: Reducer<AppStateType, ActionType> = (
  state,
  { type, payload },
) => {
  if (!Object.values(CartActionEnum).toString().includes(type)) {
    return state;
  }

  switch (type) {
    case CartActionEnum.cartAddItem:
      return {
        ...state,
        cart: CartWorkers.addItem(state.cart, <CartItemType>payload),
      };

    case CartActionEnum.cartIncCount:
      return {
        ...state,
        cart: CartWorkers.inc(state.cart, <CartItemType>payload),
      };
    case CartActionEnum.cartDecCount:
      return {
        ...state,
        cart: CartWorkers.dec(state.cart, <CartItemType>payload),
      };
    case CartActionEnum.cartRemoveItem:
      return {
        ...state,
        cart: CartWorkers.remove(state.cart, <CartItemType>payload),
      };
    case CartActionEnum.cartClearAll:
      return {
        ...state,
        cart: {
          cartItems: [],
          total: { count: 0, sum: 0 },
        },
      };

    default:
      return { ...state };
  }
};
