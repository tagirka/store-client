import { CartItemType } from '../../types';

export interface CartSelectorsType {
  cartItemByProductId: (cartItems: CartItemType[], productId: string) => CartItemType[];
}

export const cartSelectors: CartSelectorsType = {
  cartItemByProductId: (cartItems, productId) => {
    return cartItems.filter((c) => c.itemId === productId);
  },
};
