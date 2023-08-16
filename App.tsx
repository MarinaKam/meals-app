import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens';
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { CategoryParamType } from './src/models/category';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: CategoryParamType;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={MainScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: 'Overview' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
