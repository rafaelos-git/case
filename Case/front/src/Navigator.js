import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createDrawerNavigator } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import Admin from './screens/Admin'
import Update from './screens/Update'
import Custom from './screens/Custom'

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Admin: {
        name: 'Admin',
        screen: Admin,
    },
    Update: {
        name: 'Update',
        screen: Update,
    },
    Custom: {
        name: 'Custom',
        screen: Custom,
    },
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)