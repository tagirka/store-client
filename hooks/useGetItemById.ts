import { DataModelType } from '../types';

export const useGetItemById = <T extends DataModelType>(
  selector: T[],
  id: string,
): T | undefined => {
  return selector.find((item) => item._id === id);
};
