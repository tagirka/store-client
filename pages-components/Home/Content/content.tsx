import React, { FC } from 'react';
import { ContentProps } from './content.props';
import styles from './content.module.scss';

// import Sorting from '../../Sorting/sorting';
import Items from '../Items/items';
import Categories from '../Categories/categories';

export const Content: FC<ContentProps> = () => {
  return (
    <>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.content__top}>
            <Categories />
            {/*<Sorting />*/}
          </div>
          <h2 className={styles.content__title}>Все пиццы</h2>
          <div className={styles.content__items}>
            <Items />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
