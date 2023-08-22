import { FC, useContext } from 'react';

import { MealsList } from '../../components/MealsList';
import { MEALS } from '../../dummy-data/dummy-data';
import { FavoritesContext } from '../../store/context';

export const FavoritesScreen: FC = () => {
  const { selectedIDs } = useContext(FavoritesContext);
  const favorMeals = MEALS.filter((meal) => selectedIDs.includes(meal.id));

  return <MealsList items={favorMeals} />;
};
