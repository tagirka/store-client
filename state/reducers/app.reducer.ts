import { Reducer } from 'react';

import { AppStateType } from '../app.state/app.state';
import { ActionType, CartActionEnum, ItemActionEnum } from '../app.state/app.actions';

import { itemReducer } from './item.reducer';
import { cartReducer } from './cart.reducer';

export const AppReducer: Reducer<AppStateType, ActionType> = (state, { type, payload }): AppStateType => {
  if (Object.values(ItemActionEnum).toString().includes(type)) {
    return itemReducer(state, { type, payload });
  }

  if (Object.values(CartActionEnum).toString().includes(type)) {
    return cartReducer(state, { type, payload });
  }

  return state;
};
