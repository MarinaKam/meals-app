import { FC } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

interface IconButtonInterface {
  icon: string;
  color: string;
  onPress: () => void;
}
export const IconButton: FC<IconButtonInterface> = ({ icon, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
