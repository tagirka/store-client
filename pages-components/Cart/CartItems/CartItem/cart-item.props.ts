import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CartItemType } from '../../../../types';

export interface CartItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: CartItemType;
}
