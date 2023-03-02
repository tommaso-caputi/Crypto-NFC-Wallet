import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './components/Login/Login'
import Logged  from './components/Logged/Logged'
import './shim'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}