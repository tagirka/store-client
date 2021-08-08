import React, { FC, useContext } from 'react';

import { CartContentProps } from './cart-content.props';
import styles from '../cart.module.scss';

import CartTop from '../CartTop/cart-top';
import CartItems from '../CartItems/cart-items';
import CartBottom from '../CartBottom/cart-bottom';
import { AppContext } from '../../../context/app.context';

const CartContent: FC<CartContentProps> = () => {
  const {
    state: {
      cart: { cartItems, total },
    },
  } = useContext(AppContext);

  return (
    <div className="content">
      <div className="container container--cart">
        <div className={styles.cart}>
          <CartTop />
          <CartItems cartItems={cartItems} />
          <CartBottom total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
