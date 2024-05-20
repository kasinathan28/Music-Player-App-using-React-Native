import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './Modules/OnBoard';
import { Dimensions } from 'react-native';

import * as Font from 'expo-font';

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/SourceCodePro.ttf'),
  });
};


const Stack = createNativeStackNavigator();
export const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="OnBoard1"
          component={OnBoard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
