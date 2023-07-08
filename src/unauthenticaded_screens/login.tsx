/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import { screenWidth,margins } from '../globalConstants/constants';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../globalConstants/colors';
import GlobalStyles from '../globalConstants/globalStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = ({navigation}:any) => {
  const [ischecked,setCheckbox]=useState(false)
  const [isPasswordShow,setPassowordStatus]=useState(false)
  const siginUser = (type:any)=>{
    if(type=='forgotPassword'){
      navigation.navigate('forgot', {id: 'vibushnan'})
    }
    else if(type=='login'){
    navigation.navigate('authTabs', {id: 'vibushnan'})
   }
  }
 
  return (
    <SafeAreaView>
      <View style={{backgroundColor:COLORS.loginBgColor}}>
      <View>
        <Image
        source={require('../assets/images/loginIcon.png')}
        style={{width: '100%',
          height: 80,
          resizeMode: 'contain',marginTop:10}}
      />
        </View>
        <Text style={{color:'#d8d8d8',textAlign:'center',display:'flex',alignContent:'center',
       justifyContent:'center',paddingVertical:10,fontSize:20}}> 
        Welcome Back</Text>
        <Text style={{color:'#d8d8d8',textAlign:'center',display:'flex',alignContent:'center',
       justifyContent:'center',paddingBottom:30}}> 
        Enter your credentials to access</Text>
      </View>
       <View style={loginStyles.loginContainer}>
        <View style={{display:'flex',flexDirection:"row"}}>
          <View style={loginStyles.iconStyle}>
          <FontAwesome
               name="user-circle"
             size={18}
           color={COLORS.secondaryFontColor}/>
          </View>
          <View>
          <TextInput placeholder='Email' style={[GlobalStyles.textInput,
        {width:screenWidth-margins,borderBottomLeftRadius:0,borderTopLeftRadius:0}]} 
        keyboardType='email-address'
       inputMode='email' placeholderTextColor={COLORS.secondaryFontColor} 
       />
          </View>
        </View>
        <View style={{display:'flex',flexDirection:"row"}}>
        <View style={loginStyles.iconStyle}>
          <FontAwesome
               name={isPasswordShow?"unlock-alt":"lock"}
             size={25}
           color={COLORS.secondaryFontColor}
           onPress={()=>{setPassowordStatus(!isPasswordShow)}}/>
          </View>
        <TextInput placeholder='Password' style={[GlobalStyles.textInput,{width:screenWidth-margins
        ,borderBottomLeftRadius:0,borderTopLeftRadius:0}]}  secureTextEntry={!isPasswordShow?true:false} 
          inputMode='text' placeholderTextColor={COLORS.secondaryFontColor}
           />
        </View>
        <View style={loginStyles.forgotRemember} >
          <View style={{display:'flex',flexDirection:"row",marginLeft:'45%'}}>
          <CheckBox
       disabled={false}
      value={ischecked}
      tintColors={{true:'#2a7cf6',false:'#aaaaaa'}}
      onValueChange={(newValue) => setCheckbox(newValue)}
     />
     <Text style={{marginTop:6}}>Remember Me</Text>
          </View>
          <View>
          <TouchableOpacity style={[{width:screenWidth-margins},{marginTop:5}]} onPress={()=>{siginUser('forgotPassword')}}
        >
        <Text style={{color:COLORS.primaryBtnColor,textAlign:'justify',fontSize:15}}>Forgot Password?</Text>
      </TouchableOpacity>
          </View>
        </View>
        <View>
        <TouchableOpacity style={[GlobalStyles.buttons,{width:screenWidth-margins+35}]} onPress={()=>{siginUser('login')}}
        >
        <Text style={{color:COLORS.primaryBtnFontColor,textAlign:'center',fontSize:14}}>Sign In</Text>
      </TouchableOpacity>
        </View>
       </View>
  </SafeAreaView>
  )
}

// Styles //
const loginStyles = StyleSheet.create({
  loginContainer:{
    backgroundColor:COLORS.primaryBgColor,
    display:'flex',
    alignItems:'center',
    height:'100%',
    paddingVertical:80,
    // justifyContent:'center',
    gap:30,
  },
  forgotRemember:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:90,
  },
  iconStyle:{
    display:"flex",
    justifyContent:"center",
    borderRadius:8,
        padding:10,
        borderColor:COLORS.secondaryFontColor,
        borderWidth:1,
        borderBottomEndRadius:0,
        borderTopEndRadius:0,
        marginRight:-1
  }
})
export default Login