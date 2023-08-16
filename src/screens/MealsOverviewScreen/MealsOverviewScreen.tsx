import { FC, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../../../App';
import { MealItem } from '../../components/MealItem';
import { MEALS } from '../../dummy-data/dummy-data';
import { MealInterface } from '../../models/meal';
import { styles } from './styles';

const renderItem = ({ item }: { item: MealInterface }) => {
  return <MealItem {...item} />;
};

type MealScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;

export const MealsOverviewScreen: FC = () => {
  const route = useRoute<MealScreenRouteProp>();
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
        numColumns={1}
      />
    </View>
  );
};
