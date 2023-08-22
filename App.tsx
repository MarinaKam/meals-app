import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { DrawerNavigator } from './src/components/navigation';
import { CategoryParamType, MealDetailsParamType } from './src/models/category';
import { MealDetails } from './src/screens/MealDetails';
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { store } from './src/store';

export type RootStackParamList = {
  MealsCategories: undefined;
  Drawer: undefined;
  MealsOverview: CategoryParamType;
  MealDetail: MealDetailsParamType;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <>
      <StatusBar style="light" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
