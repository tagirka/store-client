import React, { FC, useContext } from 'react';
import { CartItemProps } from './cart-item.props';
import styles from '../../cart.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { AppContext } from '../../../../context/app.context';
import { useGetItemById } from '../../../../hooks/useGetItemById';

import { OperationCart } from '../../../../types';
import { CartActions } from '../../../../state/actions/cart.actions';

const CartItem: FC<CartItemProps> = ({ item }) => {
  const {
    state: {
      response: { product: pizzas, depth: depths, size: sizes },
    },
    dispatch,
  } = useContext(AppContext);

  const pizza = useGetItemById(pizzas, item.itemId);
  const depth = useGetItemById(depths, item.depth);
  const size = useGetItemById(sizes, item.size);

  if (pizza === undefined || depth === undefined || size === undefined) return <></>;

  const handleClick = (operation: string) => {
    switch (operation) {
      case OperationCart.plus:
        dispatch(CartActions.incCount(item));
        break;

      case OperationCart.minus:
        dispatch(CartActions.decCount(item));
        break;

      case OperationCart.remove:
        dispatch(CartActions.delItemCart(item));
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__itemImg}>
        <Image className="pizza-block__image" src={pizza.image} alt={pizza.title} width="80px" height="80px" />
      </div>
      <div className={styles.cart__itemInfo}>
        <h3>{pizza.title}</h3>
        <p>
          {depth.title}, {size?.title}
        </p>
      </div>
      <div className={styles.cart__itemCount}>
        {/*<div className="button button--outline button--circle cart__item-count-minus">*/}
        <div
          onClick={() => handleClick(OperationCart.minus)}
          className={cn('button button--outline button--circle', styles.cart__itemCountMinus, {
            [styles.cartButtonDisable]: item.count <= 0,
          })}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </div>
        <b>{item.count}</b>
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={() => handleClick(OperationCart.plus)}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </div>
      </div>
      <div className={styles.cart__itemPrice}>
        <b>{item.total} ₽</b>
      </div>
      <div className={styles.cart__itemRemove} onClick={() => handleClick(OperationCart.remove)}>
        <div className="button button--outline button--circle">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
