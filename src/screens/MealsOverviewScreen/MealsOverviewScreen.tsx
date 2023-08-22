import { useNavigation } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { FC, useLayoutEffect, useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { RootStackParamList } from '../../../App';
import { MealItem } from '../../components/MealItem';
import { MEALS, CATEGORIES } from '../../dummy-data/dummy-data';
import { MealDetailsType } from '../../models/category';
import { MealInterface } from '../../models/meal';

const renderItem = ({ item, navigation }: MealDetailsType) => {
  const onPress = () => {
    const params: { mealID: string; title: string } = {
      mealID: item.id,
      title: item.title,
    };

    navigation.navigate('MealDetail', params);
  };

  return <MealItem {...item} onPress={onPress} />;
};

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

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem({ item, navigation })}
        numColumns={1}
      />
    </View>
  );
};
