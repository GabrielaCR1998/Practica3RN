import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import Tiendaprovider from './Context/TiendaContext'

export default function App() {
  return (
    <Tiendaprovider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </Tiendaprovider>
  );
}

