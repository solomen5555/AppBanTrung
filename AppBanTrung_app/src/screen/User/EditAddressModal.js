import React,{ useState,useEffect } from 'react';
import { Block,Button } from '../../components';
import { Dimensions, KeyboardAvoidingView, Text,Modal } from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const EditAddress = (props) => {
    const [modalVisibleEditAddress,setModalVisibleEditAddress] = useState();
console.log('propsss',props.modalVisibleEditAddress)
    useEffect(()=>{
      if(props.modalVisibeEditAddress != undefined){
        setModalVisibleEditAddress(props.modalVisibleEditAddress)  
      }
     
    },[props?.modalVisibleEditAddress])
    console.log('modal edit',modalVisibleEditAddress)
    return (

        <Block  flex={1} justifyCenter alignCenter  marginTop={22} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleEditAddress}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setModalVisibleEditAddress(false);
          }}
        >
          <Block  flex={1} height={windowHeight} width={windowWidth} justifyCenter alignCenter  marginTop={22} backgroundColor='white' >
          <Button
          
            onPress={() => {
              setModalVisibleEditAddress(false)
              props.setModalVisibleEditAddress(false)
            }}
          >
           <Text style={{fontSize:17}} >Show Modal</Text>
          </Button>
          
          </Block>
        </Modal>
        
      </Block>
    );

}

export default EditAddress;