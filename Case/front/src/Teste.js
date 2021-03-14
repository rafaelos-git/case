import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './screens/Auth'
import Admin from './screens/Admin'
import Update from './screens/Update'

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
          />
          <Stack.Screen
            name="Update"
            component={Update}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}