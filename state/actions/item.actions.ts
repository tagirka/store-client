import { ActionType, ItemActionEnum } from '../app.state/app.actions';
import { AppStateType } from '../app.state/app.state';

export interface ItemActionsType {
  init: () => ActionType;
  fetch: (isLoading: boolean) => ActionType;
  fill: (data: any) => ActionType;
  fillViewCategories: () => ActionType;
  fillViewProducts: () => ActionType;

  setActiveCategory: (id: string) => ActionType;
}

export const ItemActions: ItemActionsType = {
  init: () => ({ type: ItemActionEnum.init }),
  fetch: (isLoading: boolean) => ({ type: ItemActionEnum.fetch, payload: isLoading }),
  fill: (data: AppStateType) => {
    return { type: ItemActionEnum.fill, payload: data };
  },
  fillViewCategories: () => {
    return { type: ItemActionEnum.fillViewCategories };
  },
  fillViewProducts: () => {
    return { type: ItemActionEnum.fillViewProducts };
  },
  setActiveCategory: (id) => {
    return { type: ItemActionEnum.setActiveCategory, payload: id };
  },
};
