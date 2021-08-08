import React, { FC } from 'react';
import Image from 'next/image';

import { SortingProps } from './sorting.props';
import styles from './sorting.module.scss';

import arrow_top from '../../public/arrow-top.svg';

const Sorting: FC<SortingProps> = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__label}>
        <Image src={arrow_top} alt="arrow sort" />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className={styles.sort__popup}>
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sorting;
