import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { MealInterface } from '../../models/meal';

interface MealDetailsInterface {
  duration: MealInterface['duration'] | undefined;
  complexity: MealInterface['complexity'] | undefined;
  affordability: MealInterface['affordability'] | undefined;
  style?: { [key: string]: string | number };
  textStyle?: { [key: string]: string | number };
}

export const MealDetails: FC<MealDetailsInterface> = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity?.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability?.toUpperCase()}</Text>
    </View>
  );
};
