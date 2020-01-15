import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import{ Image } from 'react-native'

import Feed from './pages/Feed'
import New from './pages/New'

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New
    }, 
    {
      mode: 'modal',
      initialRouteName: 'Feed',
      // headerMode: 'none',
        defaultNavigationOptions:{ //se aplica para todas as telas
            headerTintColor: '#000',
            headerTitle: () => <Image style={{marginHorizontal: 116}} source={logo}/>,
            headerBackTitle: () => null,
        },
    })
);