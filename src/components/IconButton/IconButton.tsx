import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface IconButtonInterface {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

export const IconButton: FC<IconButtonInterface> = ({ icon, color, onPress }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <Ionicons size={24} name={icon} color={color} />
    </Pressable>
  );
};
