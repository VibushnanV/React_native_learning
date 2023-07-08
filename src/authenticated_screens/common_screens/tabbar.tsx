/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../unauthenticaded_screens/login';
import Executive_dashboard from '../mainScreens/executive_dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const TabBar = () => {
  return (
      <BottomTab.Navigator initialRouteName="executive_dashboard"
      screenOptions={
        { headerStyle: { backgroundColor: '#EFEFEF'},
        headerTitleAlign:"center",
        headerTitle:"Icon Mania",
      }
        }>
        <BottomTab.Screen
          name="executive_dashboard"
          component={Executive_dashboard}
          options={{title:''}}

        />
      </BottomTab.Navigator>
  )
}

export default TabBar

const styles = StyleSheet.create({

})