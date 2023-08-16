import { FC, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { CategoryParamType } from '../../models/category';
import { MealItem } from '../../components/MealItem';
import { MEALS } from '../../dummy-data/dummy-data';
import { MealInterface } from '../../models/meal';
import { styles } from './styles';

const renderItem = ({ item }: { item: MealInterface }) => {
  return <MealItem {...item} />;
};

export const MealsOverviewScreen: FC = () => {
  const route = useRoute<{ params: CategoryParamType }>();
  const categoryID = route?.params?.categoryId;
  const meals: MealInterface[] = useMemo(() => (
    MEALS.filter((meal) => categoryID && meal?.categoryIds.indexOf(categoryID) >= 0)
  ), [categoryID]);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};
