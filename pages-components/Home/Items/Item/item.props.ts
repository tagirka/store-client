import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CartItemType, PizzaType } from '../../../../types';

export interface ItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pizza: PizzaType;
  handlerAdd: (data: CartItemType) => void;
}
