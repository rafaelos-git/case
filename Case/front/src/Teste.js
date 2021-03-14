import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './screens/Auth'
import Admin from './screens/Admin'
import Custom from './screens/Custom'
import Update from './screens/Update'
import { createAppContainer } from 'react-navigation';

const Stack = createStackNavigator(
  {
    Auth: {
      screen: Auth
    },
    Admin: {
      screen: Admin
    },
    Custom: {
      screen: Custom
    },
    Update: {
      screen: Update
    }
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer (Stack)

export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}