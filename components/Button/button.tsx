import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { ButtonProps } from './button.props';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = ({ children, appearance, link = null, className, ...props }) => {
  const btnClassName = cn(className, styles.button, {
    [styles.buttonCart]: appearance === 'cart',
    [styles.buttonOutline]: appearance === 'outline',
    [styles.buttonAdd]: appearance === 'outline',
  });

  return (
    <>
      {link || link !== null ? (
        <Link href={link} {...props}>
          <a className={btnClassName}>{children}</a>
        </Link>
      ) : (
        <button className={btnClassName} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
