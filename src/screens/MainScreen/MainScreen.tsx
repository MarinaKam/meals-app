import { FC } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { CategoryGridTile } from '../../components';
import { CategoryItemDataType, CategoryNavType } from '../../models/category';
import { CATEGORIES } from '../../dummy-data/dummy-data';

const renderItem = ({ item, navigation }: CategoryItemDataType) => {
  const onPress = () => {
    const params: { categoryId: string } = {
      categoryId: item.id,
    };

    navigation.navigate('MealsOverview', params);
  };

  return (
    <CategoryGridTile
      title={item?.title}
      color={item?.color}
      onPress={onPress}
    />
  );
};

export const MainScreen: FC = () => {
  const navigation = useNavigation<CategoryNavType>();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem({ item, navigation })}
      numColumns={2}
    />
  );
};
