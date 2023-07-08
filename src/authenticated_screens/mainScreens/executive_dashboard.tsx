/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import COLORS from '../../globalConstants/colors'
import GlobalStyles from '../../globalConstants/globalStyles'
import { margins, screenWidth } from '../../globalConstants/constants'
import { Alert } from 'react-native'

const Executive_dashboard = ({route}:any) => {

  const iconCategories :any= {
    developerIcons: [
      "css3",
      "html5",
      "connectdevelop",
      "cloud",
      "code",
      "code-fork",
      "fire",
      "codepen",
      "feed",
      "github",
      "github-square",
      "cloud-download",
      "cloud-upload",
      "gitlab",
      "bitbucket",
      "apple",
      "windows",
      "android",
      "linux",
      "bug",
      "database",
    ],
    social: [
      "facebook",
      "twitter",
      "instagram",
      "linkedin",
      "youtube",
      "mobile",
      "mobile-phone",
      "laptop",
      "youtube-play",
      "dropbox",
      "skype","reddit"
    ],
    comic: [
      "smile-o",
      "frown-o",
      "meh-o",
      'umbrella',
      "magic",
      "child",
      "paw",
      "qq",
      "slideshare",
      "birthday-cake",
      "optin-monster"
     
    ],
    love: [
      "heart",
      "heart-o",
      "heartbeat",
      "gittip",
      "thumbs-up",
      "thumbs-down",
      "gratipay"
    ],
    friends: [
      "user",
      "users",
      "group",
      "handshake-o",
      "smile-o",
    ],
    fun: [
      "gamepad",
      "beer",
      "rocket",
      "bomb",
      "tada",
    ],
    
    flags: [
      "flag",
      "flag-o",
      "flag-checkered",
      "flag-checkered-o",
      "flag-usa",
    ],
    others:[
      "star",
      "star-o",
      "user",
      "film",
      "th-large",
      "th",
      "th-list",
      "check",
      "remove",
      "close",
      "times",
      "search-plus",
      "search-minus",
    ]
  };
 let buttonList:any=Object.keys(iconCategories)
 const [selectedCategory,setCategory]=useState(buttonList[0])
 const [selectedIcon,setIcon]=useState('')
 const [currentCount,increaseCount]=useState(0)
 const categorySelected=((category:any)=>{
  setCategory(category)
  if( FontAwesome.hasIcon(iconCategories[category][0])){
    setIcon(iconCategories[category][0])
    increaseCount((count)=>{
      return count=count+1
    })
  }
  else{
    Alert.alert('OPPS!!!','Something Went Wrong please try again')
    // setIcon(iconCategories[category][0])
  }

 
 })
 const getIcon=(()=>{
  let length:any=iconCategories[selectedCategory].length
  let index:any=((Math.random())*length).toFixed(0)
  if( FontAwesome.hasIcon(iconCategories[selectedCategory][index])){
    setIcon(iconCategories[selectedCategory][index])
    increaseCount((count)=>{
      return count=count+1
    })
    if(currentCount==50){
      Alert.alert('Success','Woww!!! You achieved the target,Lets do again.',
      [{text:'Play Again',style:'default'}])
      increaseCount(0)
    }
  }
  else{
    Alert.alert('OPPS!!!','Something Went Wrong please try again')

    // setIcon(iconCategories[selectedCategory][index])
  }
 })
  return (
    <SafeAreaView>
      <ScrollView  style={{backgroundColor:"#DDE6ED",height:'100%',display:'flex'}}>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={styles.childrens}>
        {
          selectedIcon!='' &&
      <><Text style={styles.cardTitle}>
                Heyy!!! Here is your Icon
              </Text><View style={styles.iconOuter}>
                  <FontAwesome
                    style={styles.iconStyle}
                    name={selectedIcon}
                    size={70}
                    color={COLORS.secondaryFontColor} />
                  <Text style={{ textAlign: 'center', fontSize: 20 }}>{selectedIcon}</Text>
                </View></>
}
{
          selectedIcon=='' &&
          <>
      <Text style={styles.cardTitle}>
        Create Icons to Begin !!!
      </Text>
      <View style={styles.iconOuter}>
      <FontAwesome
                    name='envelope'
                    style={{textAlign:'center'}}
                    size={50}
                    color={'red'} />
                  <Text style={{ textAlign: 'center', fontSize: 20,padding:30 }}>No Icons Created</Text>
                </View>
      </>
}
     
      </View>
      </View>
      <View>
        <Text style={{marginHorizontal:10,borderBottomColor:'#2a7cf6',borderBottomWidth:2
      ,width:'30%',textAlign:'center'}}>Select Category</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',marginTop:5}}>
      {
        buttonList.map((buttons:any,i:any)=>{
           return(
            <View key={i} style={{marginHorizontal:10,marginVertical:5}}>
<TouchableOpacity style={
    selectedCategory==buttons? styles.activeButtons:styles.buttons
} 
onPress={()=>{
  categorySelected(buttons)
}}
        >
        <Text style={[{textAlign:'center',fontSize:14},
       selectedCategory==buttons? {color:'#fff'}:{color:"#212925"}]}>
          {buttons}</Text>
      </TouchableOpacity>
            </View>
           )
        })
      }
      </View>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
      <View style={styles.childrens}>
      <View style={styles.titleContainer}>
        <View style={styles.cardTitle}>
        <Text>  Icons Created:</Text>
        </View>
         <View>
         <TouchableOpacity style={styles.smallBtn} onPress={()=>{
          increaseCount(0)
          setIcon('')
         }}>
         <FontAwesome name='refresh' size={15} color={'#B2A4FF'}>
         <Text >
            Reset
             </Text>
         </FontAwesome>
   
        </TouchableOpacity>
         </View>
        
      </View>
      <View style={{display:'flex',flexDirection:'row',padding:10,gap:80}}>
        <View style={{display:'flex',flexDirection:'row',padding:10}}> 
        <Text style={{fontSize:50}}>
          {currentCount}
        </Text>
        <Text style={{fontSize:50}}> / </Text>
        <Text style={{fontSize:50,color:'#A0C49D'}}>
          50
        </Text>
        </View>
        <View>
        <FontAwesome
      name='gift'
      size={80}
      color={'#DDFFBB'}
      />
        </View>
      </View>
      <Text style={{padding:5,textAlign:'center'}}>Complete the target to see the magic</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10,marginTop:10}}>
        <TouchableOpacity style={[GlobalStyles.buttons,{width:screenWidth-margins+70}]}
onPress={()=>{
 getIcon()
}}
        >
        <Text style={{color:COLORS.primaryBtnFontColor,textAlign:'center',fontSize:14}}>
        Create
          </Text>
      </TouchableOpacity>
        </View>
      
      {/* <View style={{flex:1,flexDirection:'row'}}>
      <View style={styles.childrens}>
        <Text style={styles.cardTitle}>Learning React Native</Text>
  </View>
  <View style={styles.childrens}>
  <Text style={styles.cardTitle}>Learning Node js</Text>
  </View>
      </View>
      <View>
      <FontAwesome
               name="user-circle"
             size={18}
           color={COLORS.secondaryFontColor}/>
      </View>
        <View>
      <Image source={require('../../assets/images/configIcon.png')}
          style={{width:'100%',resizeMode: 'contain',flex:1}} />
      </View> */}
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Executive_dashboard

const styles = StyleSheet.create({
  childrens:{
    backgroundColor:'#FFf',
    minHeight:100,
    margin:10,
    // padding:10,
    width:'95%',
    borderRadius:10
  },
  titleContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
},
  cardTitle:{
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'#F5F5F5',
    width:'80%',
    paddingVertical:10,
    paddingLeft:5,
    borderBottomRightRadius:70,
  
  } ,
  iconStyle:{
    margin:10,
    textAlign:'center',
    color:'#A4BC92'
  },
  iconOuter:{
    margin:20,
    padding:10,
    borderRadius:10,
     backgroundColor:"#ECF9FF",
  },
  buttons:{
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:8,
  },
  activeButtons:{
    backgroundColor:COLORS.primaryBtnColor,
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:8,
  },
  smallBtn:{
    backgroundColor:"transparent",
    padding:10,
    borderRadius:8,
  }
})

function categorySelection() {
  throw new Error('Function not implemented.')
}
