import React, { FC, useContext, useEffect } from 'react';
import { CategoriesProps } from './categories.props';

import { AppContext, AppContextType } from '../../../context/app.context';

import CategoriesView from './categories.view';
import { ItemActions } from '../../../state/actions/item.actions';

const Categories: FC<CategoriesProps> = () => {
  const {
    state: {
      isLoading,
      // response: { category: categories, product: pizzas },
      view: { viewCategories },
    },
    dispatch,
  }: AppContextType = useContext(AppContext);

  useEffect(() => {
    if (!isLoading) return;

    dispatch(ItemActions.fillViewCategories());
  }, [dispatch, isLoading]);

  const setCategory = (categoryId: string) => {
    dispatch(ItemActions.setActiveCategory(categoryId));
  };

  return <>{viewCategories && <CategoriesView viewCategories={viewCategories} setCategory={setCategory} />}</>;
};

export default Categories;
