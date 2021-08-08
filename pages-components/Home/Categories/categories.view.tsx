import React, { FC } from 'react';
import styles from './categories.module.scss';
import cn from 'classnames';
import { ViewCategoryType } from '../../../types';

interface Props {
  viewCategories: ViewCategoryType[];
  setCategory: (id: string) => void;
}

const CategoriesView: FC<Props> = ({ viewCategories, setCategory }) => {
  return (
    <div className={styles.categories}>
      <ul>
        {viewCategories.map((category) => (
          <li
            className={cn({
              [styles.active]: category.active,
            })}
            key={category._id}
            onClick={() => setCategory(category._id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesView;
