import { FC } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { MealInterface } from '../../models/meal';
import { ShadowView } from '../ShadowView';
import { MealDetails } from '../MealDetails';
import { styles } from './styles';

export type MealItemProps = {
  onPress?: () => void;
};

export const MealItem: FC<MealInterface & MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <ShadowView>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </ShadowView>
  );
};
