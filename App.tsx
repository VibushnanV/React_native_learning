/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticatedTabs from './src/unauthenticaded_screens/unauthenticatedTabs';


 const App =()=> {
  return (
   <NavigationContainer>
   <UnAuthenticatedTabs />
    </NavigationContainer>
  )
}
export default App
