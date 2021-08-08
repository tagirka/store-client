import { ViewProductType } from '../../types';

export interface ResponseSelectorsType {
  productByCategory: (products: ViewProductType[], categoryId: string) => ViewProductType[];
}

export const responseSelectors: ResponseSelectorsType = {
  productByCategory: (products, categoryId) => products.filter((p) => p.categoryId === categoryId),
};
