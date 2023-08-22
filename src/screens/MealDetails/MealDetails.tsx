import { useNavigation } from '@react-navigation/core';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FC, useCallback, useContext, useLayoutEffect, useMemo } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';

import { styles } from './styles';
import { RootStackParamList } from '../../../App';
import { List, MealDetails as Details, Subtitle, IconButton } from '../../components';
import { MEALS } from '../../dummy-data/dummy-data';
import { MealInterface } from '../../models/meal';
import { FavoritesContext } from '../../store/context';

export type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetail'>;

export const MealDetails: FC = () => {
  const { isFavoriteId, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const route = useRoute<MealDetailScreenRouteProp>();
  const navigation = useNavigation();
  const mealID = route?.params?.mealID;
  const isFavorite = isFavoriteId(mealID as string);
  const selectedMeal: MealInterface | undefined = useMemo(() => MEALS?.find((item) => item?.id === mealID), [mealID]);

  const handleToggleFav = useCallback(() => {
    if (!mealID) return;

    if (isFavorite) {
      removeFavorite(mealID);
    } else {
      addFavorite(mealID);
    }
  }, [mealID, isFavorite, addFavorite, removeFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.params?.title,
      headerBackTitleVisible: false,
      headerRight: () => (
        <IconButton color="white" icon={isFavorite ? 'star' : 'star-outline'} onPress={handleToggleFav} />
      ),
    });
  }, [isFavorite, route?.params, navigation, handleToggleFav]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <Details
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List items={(selectedMeal?.ingredients || []) as string[]} />
          <Subtitle title="Steps" />
          <List items={(selectedMeal?.steps || []) as string[]} />
        </View>
      </View>
    </ScrollView>
  );
};
