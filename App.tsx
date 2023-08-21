import 'react-native-gesture-handler';
import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './src/screens/MealsOverviewScreen';
import { CategoryParamType, MealDetailsParamType } from './src/models/category';
import { MealDetails } from './src/screens/MealDetails';
import { DrawerNavigator } from './src/components/navigation';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: CategoryParamType;
  MealDetail: MealDetailsParamType;
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
    </>
  );
};

export default App;
