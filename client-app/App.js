import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './app/screens/home-page';

import DynamicComponent from './app/components/dynamic-component';

const Stack = createStackNavigator();


export default function App() {
  return (
   
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode=''none>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="NewPage" >
              {() => <DynamicComponent __id="new-page" />}
            </Stack.Screen>
          </Stack.Navigator>
          <StatusBar style="auto" backgroundColor="#1c6fb8" />
        </NavigationContainer>
      </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
