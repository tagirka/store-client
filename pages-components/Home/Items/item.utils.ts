import { AttendModelType, DepthType, SizeType } from '../../../types';

export interface ItemUtilsType {
  getActiveSelector: <T extends DepthType | SizeType>(selector: T[]) => T | undefined;
  fillViewSelector: <T extends AttendModelType>(selector: T[], itemAvailable: string[]) => T[];
  sumTotal: (depthRatio: number, sizeRatio: number, cost: number) => number;
}

export const ItemUtils: ItemUtilsType = {
  getActiveSelector: (selector) => {
    return selector.find((d) => d.active);
  },

  fillViewSelector: (selector, itemAvailable: string[]) => {
    const newSelector = selector.map((s) => {
      return { ...s, visible: itemAvailable.includes(s._id) };
    });

    const activeSelector = newSelector.find((a) => a.visible);

    if (activeSelector === undefined) return newSelector;
    activeSelector.active = true;

    return newSelector;
  },

  sumTotal: (depthRatio = 1, sizeRatio = 1, cost = 0) => {
    return +(cost * (depthRatio >= 0 ? depthRatio : 1) * (sizeRatio >= 0 ? sizeRatio : 1)).toFixed(2);
  },
};
