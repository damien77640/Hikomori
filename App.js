import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import * as firebase from 'firebase'

import {APIKEY,STORAGE_BUCKET,MSGID,APPID} from '@env'


import { AuthContext } from './Components/Context';
import RootStackScreen from './Components/pages/RootStackScreen'
import HomeStackScreen from './Components/pages/HomeStackScreen'


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "hikomoribackup.firebaseapp.com",
  projectId: "hikomoribackup",
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MSGID,
  appId: APPID
};

if(firebase.apps.length ===0){
  firebase.initializeApp(firebaseConfig)
}




const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj')
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('fgkj')
      setIsLoading(false)
    },
  }))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ?(
          <HomeStackScreen/>
        ): <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

