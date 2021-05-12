//ANCHOR This is a file to manage the first 3 Screens that the user is going to see, those screens are the OnboardingScreen the SignInScreen and SignupScreen.

import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import OnboardingScreen from './OnboardingScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const RootStack = createStackNavigator()

function RootStackScreen({navigation}) {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
            <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
            <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen
