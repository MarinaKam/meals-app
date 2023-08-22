import { FC } from 'react';

import { MealsList } from '../../components/MealsList';
import { MEALS } from '../../dummy-data/dummy-data';
import { useAppSelector } from '../../hooks';

export const FavoritesScreen: FC = () => {
  const favorites = useAppSelector((state) => state.favorites);

  const favorMeals = MEALS.filter((meal) => favorites.includes(meal.id));

  return <MealsList items={favorMeals} />;
};
