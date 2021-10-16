import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Main from './src/router/index';



export default function App() {
  return (
    <NavigationContainer>
      <Header />
       <Main />
    </NavigationContainer>
    
  );
}


