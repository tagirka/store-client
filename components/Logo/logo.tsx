import React, { FC } from 'react';
import { LogoProps } from './logo.props';
import styles from './logo.module.scss';
import Image from 'next/image';
import pizzaLogo from '../../public/pizza-logo.svg';

const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.logo__wrapper}>
      <Image src={pizzaLogo} width="38" height="46" alt="Pizza logo" />
      <div className={styles.logo__title}>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};

export default Logo;
