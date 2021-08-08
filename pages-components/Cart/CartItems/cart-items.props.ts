import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CartItemType } from '../../../types';

export interface CartItemsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cartItems: CartItemType[];
}
