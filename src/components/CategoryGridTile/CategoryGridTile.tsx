import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';
import { CategoryInterface } from '../../models/category';
import { styles } from './styles';

type CategoryGridTileType = Pick<CategoryInterface, 'title' | 'color'> & { onPress: () => void };

export const CategoryGridTile: FC<CategoryGridTileType> = ({
  title,
  color,
  onPress,
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#eee' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerWrapper, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
