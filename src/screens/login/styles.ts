import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.greenBackground,
        justifyContent:'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        margin: 10,
        color:colors.white
      },
      text:{
        color:colors.white,
       left:15,
       fontSize:18
      },
      buttonContainer:{
     
        justifyContent: 'flex-end',
        alignSelf: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        bottom: 0,
        gap: 10,
        top: 0,
       
      
      
},
button: {
    padding: 18,
    backgroundColor: colors.yellow,
    borderRadius: 30,
    width:'60%'
  },
  text1:{
    color:colors.white,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
  },
  image:{
    alignSelf:'center',
    resizeMode:'center'
  },
  text2:{
    textAlign:'center',
    bottom:60,
    color:colors.white,
    fontSize:26,
    fontWeight:'bold'
  },
  imageContainer:{
    bottom: 80, 
    justifyContent: 'flex-start'
  }
})