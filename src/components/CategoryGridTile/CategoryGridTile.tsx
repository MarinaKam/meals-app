import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';
import { CategoryInterface } from '../../models/category';
import { ShadowView } from '../ShadowView';

type CategoryGridTileType = Pick<CategoryInterface, 'title' | 'color'> & {
  onPress: () => void;
};

export const CategoryGridTile: FC<CategoryGridTileType> = ({ title, color, onPress }) => (
  <ShadowView style={styles.gridItem}>
    <Pressable
      android_ripple={{ color: '#eee' }}
      style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
      onPress={onPress}
    >
      <View style={[styles.innerWrapper, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </ShadowView>
);
