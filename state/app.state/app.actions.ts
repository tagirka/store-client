export interface ActionType {
  type: AppActionEnum;
  payload?: unknown;
}

export type AppActionEnum = ItemActionEnum | CartActionEnum;

export enum ItemActionEnum {
  init = 'INIT',
  fetch = 'FETCH',
  fill = 'FILL',
  fillViewCategories = 'FILL_VIEW_CATEGORIES',
  fillViewProducts = 'FILL_VIEW_PRODUCTS',
  setActiveCategory = 'SET_ACTIVE_CATEGORY',
}

export enum CartActionEnum {
  cartAddItem = 'CART_ADD_ITEM',
  cartIncCount = 'CART_INCREMENT_COUNT',
  cartDecCount = 'CART_DECREMENT_COUNT',
  cartRemoveItem = 'CART_REMOVE_ITEM',
  cartClearAll = 'CART_CLEAR',
}
