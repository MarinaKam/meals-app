import { FC, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '../../../App';

export type MealDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'MealDetail'
>;

export const MealDetails: FC = () => {
  const route = useRoute<MealDetailScreenRouteProp>();
  const navigation = useNavigation();
  const mealID = route?.params?.mealID;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.params?.title,
      headerBackTitleVisible: false,
    });
  }, [route?.params]);

  return (
    <View>
      <Text>MealDetails {mealID}</Text>
    </View>
  );
};
