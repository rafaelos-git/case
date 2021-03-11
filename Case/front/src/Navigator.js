import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from './screens/Auth'
import Interface from './screens/Interface'

const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: Interface,
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)