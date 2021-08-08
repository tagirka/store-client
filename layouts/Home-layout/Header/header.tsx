import React, { FC, useContext } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import { HeaderProps } from './header.props';
import styles from './header.module.scss';

import cart from '../../../public/cart.svg';
import Button from '../../../components/Button/button';
import { AppContext } from '../../../context/app.context';
import Link from 'next/link';
import Logo from '../../../components/Logo/logo';

const Header: FC<HeaderProps> = ({ ...props }) => {
  const {
    state: {
      cart: { total },
    },
  } = useContext(AppContext);

  return (
    <div {...props}>
      <div className={cn(styles.header)}>
        <div className={cn('container', styles.container)}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className={styles.header__cart}>
            {total && (
              <Button appearance="cart" link={total.count ? '/cart' : null}>
                <span>{total.sum} ₽</span>
                <div className="button__delimiter"> </div>
                <Image src={cart} alt="empty cart" />
                <span>{total.count}</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
