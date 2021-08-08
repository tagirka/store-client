import { CartItemType } from '../../types';
import { ActionType, CartActionEnum } from '../app.state/app.actions';

export interface CartActionsType {
  addItem: (item: CartItemType) => ActionType;
  decCount: (item: CartItemType) => ActionType;
  incCount: (item: CartItemType) => ActionType;
  delItemCart: (item: CartItemType) => ActionType;
  clearCart: () => ActionType;
}

export const CartActions: CartActionsType = {
  addItem: (item: CartItemType) => ({
    type: CartActionEnum.cartAddItem,
    payload: item,
  }),

  decCount: (cartItem: CartItemType) => ({
    type: CartActionEnum.cartDecCount,
    payload: cartItem,
  }),

  incCount: (cartItem: CartItemType) => ({
    type: CartActionEnum.cartIncCount,
    payload: cartItem,
  }),

  delItemCart: (cartItem: CartItemType) => ({
    type: CartActionEnum.cartRemoveItem,
    payload: cartItem,
  }),
  clearCart: () => ({
    type: CartActionEnum.cartClearAll,
  }),
};
