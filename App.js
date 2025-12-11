import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your cleaned-up TS screens from the app folder
import LoginScreen from './app/login';
import RegisterScreen from './app/register';
import DashboardScreen from './app/dashboard';
import ProfileScreen from './app/profile';
import AboutScreen from './app/about';
import ContactScreen from './app/contact';
import SettingsScreen from './app/settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
