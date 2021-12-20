import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Main from './src/router/index';
import { navigationRef1 } from './src/router/NavigationService';
import { Provider,useSelector } from 'react-redux';
import  store  from './src/Redux/store';
import AppLoading from './src/components/AppLoading';
import  Toast from 'react-native-toast-message';

import Auth from './src/Context/store/Auth';

function App1 (){
  const isLoading = useSelector(state => state.appLoadingReducer.isLoading);
  return (
      <NavigationContainer ref={navigationRef1} >
        <Main />
        <Toast />
        {isLoading ? <AppLoading /> : null}
      </NavigationContainer>
  )

}

export default function App() {

  return (
    <Auth>
  <Provider store={store} >
      <App1 />
    </Provider>
    </Auth>
   


  );
}


