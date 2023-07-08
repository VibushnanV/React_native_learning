/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { screenWidth,margins } from '../globalConstants/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../globalConstants/colors';
import GlobalStyles from '../globalConstants/globalStyles';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';


const ForgetView=({type,handler}:any)=>{
  let content:any
  let userEmail:any
  let otp:any
  let otpLength:any=[{id:6,value:'',inputName:''},{id:5,value:'',inputName:''},{id:4,value:'',inputName:''},{id:3,value:'',inputName:""},{id:2,value:'',inputName:""},{id:1,value:'',inputName:''}]
  let userData=type['data']
  const [isPasswordShow,setPassowordStatus]=useState(false)
  const getFormValue=(value:any,document?:any)=>{
    if(type['field']=='verifyOtp'){
      document['value']=value
     let index:any= otpLength.indexOf(document)
     otpLength[index]=document
     if(otpLength[index-1]){
   (otpLength[index-1]['inputName'].focus())
     }
     let filledCount:any=0
     let filledValue:any=[]
     otpLength.forEach((otp:any)=>{
      if(otp.value!=''){
        filledCount+=1
        filledValue.push(otp.value)
      }
     })
     if(filledCount==((otpLength.length))){
          filledValue=filledValue.reverse().join('')
          handler({data:filledValue,type:type['field']})
     }
    }
    else{
      handler({data:value,type:type['field']})
    }
  
    }
    const editEmail=()=>{
      handler('editMail')
    }
   const resendotp=()=>{

    }
  if(type['field']=='getOtp'){
    content= 
    <View>
    <View style={{display:'flex',flexDirection:"row"}}>
    <View style={styles.iconStyle}>
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
 value={userEmail}
 onChangeText={getFormValue}
 />
    </View>
  </View>
  </View>
  }
  else if(type['field']=='verifyOtp'){
    content=
     <View>
      <View style={styles.OtpInfo}>
      <View style={[styles.mailField]}>
          <Text>
        OTP sent to 
      </Text>
      <Text style={{color:COLORS.linkBtnColor,fontSize:15}}>{userData['email']}
      <FontAwesome
               name="edit"
             size={16}
           color={COLORS.linkBtnColor}
           style={{marginLeft:5}}
           onPress={()=>{
            editEmail()
           }}/>
           </Text>
              
      </View>

{/* <OTPInputView pinCount={6}
 style={{width: '80%', height:100}} 
 codeInputFieldStyle={styles.underlineStyleBase}
 codeInputHighlightStyle={styles.borderStyleHighLighted}
 onCodeFilled={getFormValue}
 editable={true}
 autoFocusOnLoad
 /> */}
 
  <View style={{display:"flex",flexDirection:'row-reverse'}}>
    {
      otpLength.map((doc:any,i:any)=>{
    return (
    <View style={{marginTop:10}}
    key={i}>
      <TextInput  style={[GlobalStyles.textInput,
  {width:'90%'}]} 
  keyboardType='numeric'
  maxLength={1}
 inputMode='numeric' 
 value={otp}
 autoFocus={true}
 ref={(input) => { doc['inputName']= input; }}
 
 onChangeText={(otp)=>{
  getFormValue(otp,doc)
 }}
 />
      </View>
    )
  })
  }
  </View>

      <View style={{marginTop:10,display:'flex',flexDirection:'row'}}>
         <Text>Didn't receive the OTP?
         </Text>
         <TouchableOpacity onPress={()=>{
          resendotp()
         }}>
          <Text style={{color:COLORS.linkBtnColor,fontSize:15}}>Resend OTP
         </Text>
         </TouchableOpacity>
      </View>
      </View>
     </View>

  }
  else if(type['field']=='updatePassword'){
    content=
    <View>
    <View style={{display:'flex',flexDirection:"row"}}>
    <View style={styles.iconStyle}>
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
    <View style={{display:'flex',flexDirection:"row",marginTop:50}}>
    <View style={styles.iconStyle}>
      <FontAwesome
           name={isPasswordShow?"unlock-alt":"lock"}
         size={25}
       color={COLORS.secondaryFontColor}
       onPress={()=>{setPassowordStatus(!isPasswordShow)}}/>
      </View>
    <TextInput placeholder='Confirm Password' style={[GlobalStyles.textInput,{width:screenWidth-margins
    ,borderBottomLeftRadius:0,borderTopLeftRadius:0}]}  secureTextEntry={!isPasswordShow?true:false} 
      inputMode='text' placeholderTextColor={COLORS.secondaryFontColor}
       />
    </View>
    </View>
  }
  return content
}

const ForgotPassword = () => {
  const [CurrentField,SetCurrentField]=useState('getOtp')
  const [buttonName,SetButtonName]=useState('Send OTP')
  const [userEmail,setEmailId]=useState('')
  const [otpValue,setOtpValue]=useState('')
let [userData,setUserData]=useState({})
let obj:any={}
const submitDetails=(type:any)=>{
if(type=='getOtp'){
  obj['email']=userEmail
  setUserData(obj)
  SetButtonName('Verify OTP') 
SetCurrentField('verifyOtp')
}
else{
  obj['email']=userEmail
  obj['otp']=otpValue
  setUserData(obj)
  SetCurrentField('updatePassword')
  SetButtonName('Update')
}
}
const getFormValue=(value:any)=>{
  if(value=='editMail'){
    SetButtonName('Send OTP')
    SetCurrentField('getOtp')
  }
  else{
    if(value['type']=='getOtp'){
    setEmailId(value['data'])
   
    }
    else if(value['type']=='verifyOtp'){
      setOtpValue(value['data'])
    }  
  }
 
}
  return (
    <SafeAreaView style={{backgroundColor:"aliceblue"}}>
      <View style={{backgroundColor:COLORS.loginBgColor,borderBottomStartRadius:100}}>
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
        Forgot Password?</Text>
        <Text style={{color:'#d8d8d8',textAlign:'center',display:'flex',alignContent:'center',
       justifyContent:'center',paddingBottom:30}}> 
       No worries, we'll send you a mail to reset
       </Text>
      </View>
   <View style={styles.forgetContainer}>

  <ForgetView type={{field:CurrentField,data:userData}} handler={getFormValue}></ForgetView>
        <View>
        <TouchableOpacity style={[GlobalStyles.buttons,{width:screenWidth-margins+35}]} 
        onPress={()=>{
          submitDetails(CurrentField)
        }}
        >
        <Text style={{color:COLORS.primaryBtnFontColor,textAlign:'center',fontSize:14}}>{buttonName}</Text>
      </TouchableOpacity>
        </View>
       </View>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    forgetContainer:{
        backgroundColor:COLORS.primaryBgColor,
        display:'flex',
        alignItems:'center',
        height:'100%',
        paddingVertical:80,
        // justifyContent:'center',
        gap:30,
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
      },
      OtpInfo:{},
      mailField:{
             display:'flex',
             flexDirection:"column",
             flexWrap:'wrap',
      },
      borderStyleHighLighted: {
        borderColor: COLORS.primaryBtnColor,
      },
      underlineStyleBase: {
        margin:5
      },
})


