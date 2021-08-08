export interface DataType {
  _id: string;
  title: string;
  visible?: boolean;
  active?: boolean;
}

export type AttendModelType = DepthType | SizeType;

export type DataModelType = PizzaType | CategoryType | DepthType | SizeType;

export interface PizzaType extends DataType {
  categoryId: string;
  image: string;
  cost: number;
  availableDepths: string[];
  availableSizes: string[];
}

export interface CategoryType extends DataType {}

export interface ViewProductType extends PizzaType {}

export interface ViewCategoryType extends CategoryType {}

export interface DepthType extends DataType {
  ratioCost: number;
}

export interface SizeType extends DataType {
  ratioCost: number;
}

export interface ResponseModelType {
  [id: string]: any;

  size: SizeType[];
  depth: DepthType[];
  category: CategoryType[];
  product: PizzaType[];
}

export interface ViewStateType {
  viewProducts: ViewProductType[];
  viewCategories: ViewCategoryType[];
}

export interface CartItemType {
  id?: string;
  itemId: string;
  depth: string;
  size: string;
  cost: number;
  count: number;
  total: number;
}

export interface CartStateType {
  id?: string;
  cartItems: CartItemType[];
  total: {
    count: number;
    sum: number;
  };
}

export enum OperationCart {
  plus = 'plus',
  minus = 'minus',
  remove = 'remove',
}
