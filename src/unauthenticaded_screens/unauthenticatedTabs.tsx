/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import { TabBar } from '../authenticated_screens/common_screens';
import ForgotPassword from './forgotPassword';
import COLORS from '../globalConstants/colors';

const Stack = createNativeStackNavigator();
const UnAuthenticatedTabs = () => {
  return (
    <Stack.Navigator  initialRouteName="login">
    <Stack.Screen
    options={{headerShown:false}}
      name="login"
      component={Login}
    />
      <Stack.Screen
      name="forgot"
      component={ForgotPassword}
      options={{title:'Back to Login',
      headerTintColor:COLORS.primaryBtnColor,
      headerTitleStyle:{fontSize:15},
      headerStyle:{backgroundColor:"#DBDFEA"}}}
    />
     <Stack.Screen
      name="authTabs"
      component={TabBar}
      options={{title: 'Authenticated Tabs',headerShown:false}}
    />
  </Stack.Navigator>
  );
};

export default UnAuthenticatedTabs;

