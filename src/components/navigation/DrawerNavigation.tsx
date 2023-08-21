import { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen, MainScreen } from '../../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigation: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // gestureEnabled: true,
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen name="Categories" component={MainScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};
