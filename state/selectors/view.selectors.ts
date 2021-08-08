import { CategoryType, ViewCategoryType } from '../../types';

export interface ViewSelectorsType {
  activeCategorySelector: (viewCategories: ViewCategoryType[]) => CategoryType | undefined;
}

export const ViewSelectors: ViewSelectorsType = {
  activeCategorySelector: (views: ViewCategoryType[]): CategoryType | undefined => {
    return views.find((c) => c.active);
  },
};
