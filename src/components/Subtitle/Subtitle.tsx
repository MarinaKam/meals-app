import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Subtitle: FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
