import { CartStateType, ResponseModelType, ViewStateType } from '../../types';

export interface AppStateType {
  [id: string]: any;

  response: ResponseModelType;
  view: ViewStateType;
  cart: CartStateType;

  isLoading: boolean;
}

export const initialState: AppStateType = {
  response: {
    size: [],
    depth: [],
    category: [],
    product: [],
  },

  view: {
    viewCategories: [],
    viewProducts: [],
  },

  cart: {
    cartItems: [],
    total: { count: 0, sum: 0 },
  },

  isLoading: false,
};
