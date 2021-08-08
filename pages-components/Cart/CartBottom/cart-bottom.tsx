import React, { FC } from 'react';
import { CartBottomProps } from './cart-bottom.props';
import styles from '../cart.module.scss';
import Link from 'next/link';
import cn from 'classnames';

const CartBottom: FC<CartBottomProps> = ({ total }) => {
  return (
    <div className={styles.cart__bottom}>
      <div className={styles.cart__bottomDetails}>
        <span>
          {' '}
          Всего пицц: <b>{total.count} шт.</b>{' '}
        </span>
        <span>
          {' '}
          Сумма заказа: <b>{total.sum} ₽</b>{' '}
        </span>
      </div>
      <div className={styles.cart__bottomButtons}>
        <Link href="/">
          <a className="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Вернуться назад</span>
          </a>
        </Link>
        <div
          className={cn('button pay-btn', {
            [styles.cartButtonDisable]: total.count <= 0,
          })}
        >
          <span>Оплатить сейчас</span>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
