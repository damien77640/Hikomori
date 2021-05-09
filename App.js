import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './pages/Dashboard';
import DetailsManga from './pages/DetailsManga';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen //exemple parametrage route
          name="Home"
          component={Dashboard}
        />
        <Stack.Screen
          name="Details Manga"
          component={DetailsManga}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


