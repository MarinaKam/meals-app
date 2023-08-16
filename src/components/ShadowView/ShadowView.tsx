import { FC, ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface ShadowViewInterface {
  children: ReactNode | ReactNode[];
  style?: { [key: string]: string | number };
}

export const ShadowView: FC<ShadowViewInterface> = ({ children, style = {} }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};
