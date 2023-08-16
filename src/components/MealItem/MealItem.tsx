import { FC } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { MealInterface } from '../../models/meal';
import { ShadowView } from '../ShadowView';
import { styles } from './styles';

export type MealItemProps = {
  onPress?: () => void
};

export const MealItem: FC<MealInterface & MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <ShadowView>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
  </ShadowView>
  );
};
