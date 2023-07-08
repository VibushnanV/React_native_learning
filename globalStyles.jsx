/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import { StyleSheet} from 'react-native';
const globalStyles = StyleSheet.create({
    container:{
        backgroundColor:'#2a7cf5', 
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        height:'98%',
        flexDirection:'column',
        gap:100,
        borderRadius:15,
        margin:10
    },
    text:{
        color:'#FFF',
        fontSize:35,
    }
});
export default globalStyles;