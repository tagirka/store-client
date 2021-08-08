import { AppStateType } from '../app.state/app.state';
import { DataModelType, ViewCategoryType, ViewProductType } from '../../types';
import { stateConst } from '../app.state/state.const';
import { ViewSelectors } from '../selectors/view.selectors';
import { responseSelectors } from '../selectors/response.selectors';

export interface ItemWorkersType {
  fillItems: (data: AppStateType) => AppStateType;
  fillViewCategories: (data: AppStateType) => ViewCategoryType[];
  fillViewProducts: (data: AppStateType) => ViewProductType[];
  setActiveCategory: <T extends DataModelType>(view: T[], currentId: string) => T[];
}

export const ItemWorkers: ItemWorkersType = {
  fillItems: (data) => {
    const newData = { ...data.response };
    Object.keys(newData).map((key: string) => (newData[key] as DataModelType[]).map((d) => (d.visible = true)));

    return { ...data, response: { ...newData } };
  },

  fillViewCategories: ({ response: { product: pizzas, category: categories } }) => {
    const availableCategories = pizzas.reduce((arr: ViewCategoryType[], current) => {
      const currentCategory = categories.find((c) => c._id === current.categoryId);

      if (currentCategory == undefined) return arr;

      // if (arr.findIndex((a) => a._id === currentCategory._id) > -1) return arr;

      if (arr.includes(currentCategory)) {
        return arr;
      }

      return [...arr, { ...currentCategory, active: false }];
    }, []);

    availableCategories.unshift({
      _id: stateConst.idxAllCategory,
      title: 'Все',
      active: true,
    });

    return availableCategories;
  },

  fillViewProducts: ({ response: { product }, view: { viewCategories } }) => {
    const activeCategory = ViewSelectors.activeCategorySelector(viewCategories);

    if (activeCategory === undefined) return product;

    if (activeCategory._id === stateConst.idxAllCategory) {
      // all category
      return product;
    }

    // return product;
    // return product.filter((p) => p.categoryId === activeCategory._id);
    return responseSelectors.productByCategory(product, activeCategory._id);
  },

  setActiveCategory: (view, currentId) => {
    return view.map((v) => {
      v._id === currentId ? (v.active = true) : (v.active = false);
      return v;
    });
  },
};
