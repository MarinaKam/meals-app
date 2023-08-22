import { useNavigation } from '@react-navigation/core';
import { FC } from 'react';
import { FlatList } from 'react-native';

import { CategoryGridTile } from '../../components';
import { CATEGORIES } from '../../dummy-data/dummy-data';
import { CategoryItemDataType, CategoryNavType } from '../../models/category';

const renderItem = ({ item, navigation }: CategoryItemDataType) => {
  const onPress = () => {
    const params: { categoryId: string; title: string } = {
      categoryId: item.id,
      title: item.title,
    };

    navigation.navigate('MealsOverview', params);
  };

  return <CategoryGridTile title={item?.title} color={item?.color} onPress={onPress} />;
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
