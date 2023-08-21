import { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const List: FC<{ items: string[] }> = ({ items = [] }) => {
  return items?.map((item) => (
    <View key={item} style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};
