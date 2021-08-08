import React, { FC } from 'react';
import { CartItemsProps } from './cart-items.props';
import styles from '../cart.module.scss';

import CartItem from './CartItem/cart-item';

const CartItems: FC<CartItemsProps> = ({ cartItems }) => {
  return (
    <div className={styles.content__items}>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
