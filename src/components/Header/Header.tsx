import { FC } from 'react';
import { Button } from 'react-native';

export const Header: FC = ({ onPress }) => {
  return <Button title="Tap me!" onPress={onPress} />;
};
