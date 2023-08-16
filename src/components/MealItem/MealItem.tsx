import { FC } from 'react';
import { View, Text } from 'react-native';
import { MealInterface } from '../../models/meal';
import { styles } from './styles';

export type MealItemProps = {
  onPress?: () => void
};

export const MealItem: FC<MealInterface & MealItemProps> = ({
  title,
  // onPress,
}) => {
  return (
    <View style={styles.gridItem}>
      <View style={styles.innerWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
  </View>
  );
};
