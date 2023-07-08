/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet } from "react-native";
import COLORS from "./colors";

const GlobalStyles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderRadius:8,
        backgroundColor:COLORS.primaryBgColor,
        borderColor:'#ccc',
        paddingVertical:10,
        paddingHorizontal:15,
      },
      buttons:{
        backgroundColor:COLORS.primaryBtnColor,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:8,
      },
})

export default GlobalStyles