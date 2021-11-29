import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Main from './src/router/index';
import { navigationRef1 } from './src/router/NavigationService';
import { Provider } from 'react-redux';
import  store  from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer ref={navigationRef1} >
        <Main />
      </NavigationContainer>
    </Provider>


  );
}


