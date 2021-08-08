import { Reducer } from 'react';
import { AppStateType, initialState } from '../app.state/app.state';
import { ActionType, ItemActionEnum } from '../app.state/app.actions';
import { ItemWorkers } from '../workers/item.workers';

export const itemReducer: Reducer<AppStateType, ActionType> = (state, { type, payload }): any => {
  if (!Object.values(ItemActionEnum).toString().includes(type)) {
    return state;
  }

  switch (type) {
    case ItemActionEnum.init: {
      console.log('init');
      return initialState;
    }
    case ItemActionEnum.fetch:
      return { ...state, isLoading: <boolean>payload };
    case ItemActionEnum.fill:
      return { ...state, ...ItemWorkers.fillItems(<AppStateType>payload), isLoading: true };
    case ItemActionEnum.fillViewCategories:
      return {
        ...state,
        view: { ...state.view, viewCategories: ItemWorkers.fillViewCategories(state) },
      };
    case ItemActionEnum.fillViewProducts:
      return {
        ...state,
        view: { ...state.view, viewProducts: ItemWorkers.fillViewProducts(state) },
      };

    case ItemActionEnum.setActiveCategory:
      return {
        ...state,
        view: {
          ...state.view,
          viewCategories: ItemWorkers.setActiveCategory(state.view.viewCategories, <string>payload),
        },
      };

    default: {
      return state;
    }
  }
};
