import { MealInterface } from './meal';

export interface CategoryInterface {
  id: string;
  title: string;
  color: string;
}

class Category {
  constructor(
    public id: string,
    public title: string,
    public color: string
  ) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;

export type CategoryParamType = {
  categoryId: string;
  title: string;
};

export type CategoryNavType = {
  navigate: (value: string, options: { categoryId: string }) => void;
};

export type CategoryItemDataType = {
  item: CategoryInterface;
  navigation: CategoryNavType;
};

export type NavType = {
  navigate: (value: string, options: { mealID: string }) => void;
};

export type MealDetailsType = {
  item: MealInterface;
  navigation: NavType;
};

export type MealDetailsParamType = {
  mealID: string;
  title: string;
};
