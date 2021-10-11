import React from 'react';
import { StyleSheet,SafeAreaView,Image,Dimensions } from 'react-native';
import { Block } from './Block';

const width = Dimensions.get('window').width;

const Header = () => {
    return (
        <SafeAreaView style={styles.header} >
            <Image 
                source={require("../assets/image/logo_2.png")}
                resizeMode='stretch'
                style={{height:100 , width:width}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header:{
    width:width,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    paddingBottom:5,
    marginTop:20,
      
  }
   
})

export default Header;