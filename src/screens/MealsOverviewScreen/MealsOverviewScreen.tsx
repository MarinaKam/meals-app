import { useNavigation } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FC, useLayoutEffect, useMemo } from 'react';

import { RootStackParamList } from '../../../App';
import { MealsList } from '../../components/MealsList';
import { MEALS, CATEGORIES } from '../../dummy-data/dummy-data';
import { MealInterface } from '../../models/meal';

export type MealScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;

export const MealsOverviewScreen: FC = () => {
  const route = useRoute<MealScreenRouteProp>();
  const navigation = useNavigation();
  const categoryID = route?.params?.categoryId;
  const categoryTitle = useMemo<string | undefined>(
    () => CATEGORIES?.find((item) => item?.id === categoryID)?.title,
    [categoryID]
  );
  const meals: MealInterface[] = useMemo(
    () => MEALS.filter((meal) => categoryID && meal?.categoryIds.indexOf(categoryID) >= 0),
    [categoryID]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: 'Back',
    });
  }, [categoryTitle, navigation]);

  return <MealsList items={meals} />;
};
