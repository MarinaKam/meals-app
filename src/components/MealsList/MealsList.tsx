import { useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { FlatList, View, Text } from 'react-native';

import { MealItem } from './MealItem';
import { styles } from './styles';
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

interface MealsListInterface {
  items: MealInterface[];
}

export const MealsList: FC<MealsListInterface> = ({ items }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {items?.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem({ item, navigation })}
          numColumns={1}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>No meals found</Text>
        </View>
      )}
    </View>
  );
};
