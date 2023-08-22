import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FC } from 'react';

import { FavoritesScreen, MainScreen } from '../../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // gestureEnabled: true,
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#3f2f25',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={MainScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};
