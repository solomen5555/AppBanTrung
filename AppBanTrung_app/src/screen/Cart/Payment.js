import React, { useState } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useFonts } from 'expo-font';
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Block, Button } from '../../components';
import { Text } from '../../components';
import formatMoney from '../../hooks/fomatMoney';
import { Swipeable } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import EditAddressModal from '../User/EditAddressModal';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Payment = (props) => {

  const tongTien = props?.route?.params?.tongTien;
  //console.log(props)
  const [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
  })

  const [modalVisibleEditAddress, setModalVisibleEditAddress] = useState(false);
  // const [address1,setAddress1] = useState('');
  // const [address2,setAddress2] = useState('');

  const RenderRight = () => {
    return (
      <Block style={styles.renderContainer}>
        <Block style={styles.renderSubContainer}>
          <Button>
            <Block height={46} width={windowWidth * 0.8 / 3} backgroundColor='transparent' shadow shadowRadius={3} borderBottomLeftRadius={20} borderTopLeftRadius={20} justifyCenter alignCenter >
              <Text>ATM</Text>
            </Block>
          </Button>
          <Button height={46} width={windowWidth * 0.8 / 3} backgroundColor='transparent' shadow justifyCenter alignCenter >
            <Text>ZaloPay</Text>
          </Button>
          <Button>
            <Block height={46} width={windowWidth * 0.8 / 3} backgroundColor='transparent' shadow borderTopRightRadius={20} borderBottomRightRadius={20} justifyCenter alignCenter >
            <Text>Momo</Text>
            </Block>
          </Button>
        </Block>
      </Block>

    );
  };
  const RenderLeft = () => {
    return (
      <Block style={styles.renderContainer}>
        <Block style={styles.renderSubContainer}>
          <Text style={styles.renderTextRight}>Thanh toán khi nhận hàng</Text>

        </Block>
      </Block>

    );
  };

  const ModalEditAddress = () => {
    const [address1, setAddress1] = useState(null);
    const [address2, setAddress2] = useState(null);

    return (
      <Block flex={1} justifyCenter alignCenter   >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleEditAddress}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setModalVisibleEditAddress(false);
          }}
        >
          <Block flex={1} height={windowHeight} width={windowWidth} backgroundColor='#7f8c8d' >
            <Button
              marginTop={10}
              height={windowHeight * 0.06} width={windowWidth}
              row alignCenter justifyEnd paddingHorizontal={20}
              onPress={() => {
                setModalVisibleEditAddress(false)

              }}
            >
              <AntDesign name="closecircle" size={windowHeight * 0.05} color="white" />
            </Button>

            <Block height={windowHeight * 0.94} width={windowWidth} >
              <Block height={windowWidth * 0.1} justifyCenter alignCenter marginTop={windowHeight * 0.3} >
                <TextInput
                  value={address1}
                  multiline
                  placeholder='Nhập địa chỉ giao hàng 1'
                  placeholderTextColor='white'
                  numberOfLines={3}
                  onChangeText={(addr1) => setAddress1(addr1)}
                  style={{
                    height: '100%',
                    width: windowWidth * 0.8,
                    color: 'white'
                  }}
                />
                <Block height={3} width={windowWidth * 0.8} backgroundColor='white' />
              </Block>
              <Block height={windowWidth * 0.1} justifyCenter alignCenter marginTop={40} >
                <TextInput
                  value={address2}
                  multiline
                  placeholder='Nhập địa chỉ giao hàng 2'
                  placeholderTextColor='white'
                  numberOfLines={3}
                  onChangeText={(addr2) => setAddress2(addr2)}
                  style={{
                    height: '100%',
                    width: windowWidth * 0.8,
                    color: 'white'
                  }}
                />
                <Block height={3} width={windowWidth * 0.8} backgroundColor='white' />
              </Block>
              <Block height={windowHeight * 0.1} width={windowWidth} marginTop={40} alignCenter >
                <Button
                  height={windowHeight * 0.1} width={windowWidth * 0.6} backgroundColor={address1 || address2 ? 'white' : '#bdc3c7'}
                  radius={25} justifyCenter alignCenter
                >
                  <Text style={{ fontSize: 17, fontWeight: '200', color: 'black' }} >THÊM MỚI</Text>
                </Button>
              </Block>
            </Block>

          </Block>
        </Modal>

      </Block>
    )
  }

  return (
    <SafeAreaView flex={1} backgroundColor='#f7b731' >
      <Block height={windowHeight * 0.05} marginTop={windowHeight * 0.05} alignCenter row >
        <Button marginLeft={windowWidth * 0.02} onPress={() => props.navigation.goBack()} >
          <AntDesign name="left" size={30} color="black" />
        </Button>
        <Block width={windowWidth * 0.8} justifyCenter alignCenter  >
          {fontsLoaded ? <Text style={{ fontFamily: 'Lobster_400Regular', fontSize: 24, color: 'black' }} > Thông Tin Đơn Hàng </Text> : null}
        </Block>
      </Block>
      <Block height={windowHeight * 0.1} marginTop={20} justifyCenter alignCenter  >
        <Block height='100%' width={windowWidth * 0.8} backgroundColor="#fad390" radius={20} justifyContent='space-between' alignCenter row padding={10} >
          <Text >Tổng tiền</Text>
          <Text >{formatMoney(tongTien)}đ</Text>
        </Block>
      </Block>
      <Block height={windowHeight * 0.08} alignCenter justifyCenter >
        <Text style={{ fontSize: 16, color: 'white', opacity: 0.5, fontWeight: 'bold' }} >P H Ư Ơ N G   T H Ứ C   T H A N H   T O Á N</Text>
      </Block>
      <Swipeable leftThreshold={1}
        renderLeftActions={RenderLeft}
        renderRightActions={RenderRight} >
        <Block height={windowHeight * 0.1} >
          <Block height='100%' width={windowWidth * 0.8} alignSelf='center' marginHorizontal={10}
            row backgroundColor='white' opacity={0.7} radius={20} justifyCenter alignCenter
          >
            <LinearGradient
              colors={['#FFFFFF', '#FFEFBA',]}

              start={{ x: 1, y: 0 }}
              style={{
                flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%',
                height: '100%', flexDirection: 'row', borderTopLeftRadius: 20, borderBottomLeftRadius: 20
              }}
            >
              <MaterialCommunityIcons
                name="gesture-swipe-right"
                size={25} color="green" />
              <Text>Tiền mặt</Text>
            </LinearGradient>


            <LinearGradient
              colors={['#FFEFBA', '#FFFFFF']}

              start={{ x: 1, y: 0 }}
              style={{
                flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%',
                height: '100%', flexDirection: 'row', borderTopRightRadius: 20, borderBottomRightRadius: 20
              }}
            >
              <Text>Ví của bạn</Text>
              <MaterialCommunityIcons
                name="gesture-swipe-left"
                size={25} color="green" />
            </LinearGradient>
          </Block>
        </Block>
      </Swipeable>

      <Block height={windowHeight * 0.08} alignCenter justifyCenter >
        <Text style={{ fontSize: 16, color: 'white', opacity: 0.5, fontWeight: 'bold' }} >T H Ê M   Đ Ị A   C H Ỉ</Text>
      </Block>
      <Block height={windowHeight * 0.25} backgroundColor='white' opacity={0.7} alignCenter justifyCenter
        borderTopLeftRadius={20} borderBottomLeftRadius={20} width={windowWidth * 0.9} alignSelf='flex-end'>
        <Block height='80%' width='100%' row alignCenter justifyCenter>
          <Button height='80%' width='20%' backgroundColor='white' marginHorizontal={10} justifyCenter alignCenter radius={20}
            onPress={() => {
              setModalVisibleEditAddress(true)
            }}>
            <MaterialCommunityIcons name="plus" size={50} />
          </Button>
          <Block height='100%' width='70%' backgroundColor='#fff' radius={20} >
            <Block height='20%' row justifyContent='space-between' marginHorizontal={15}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Địa chỉ 1</Text>
              <Button>
                <FontAwesome5 name="dot-circle" size={24} color="green" />
              </Button>

            </Block>
            <Block height='80%' justifyCenter alignCenter >
              <Text style={{ fontSize: 14 }} >Đ/c : 332 Khóm 4</Text>
              <Text style={{ fontSize: 14 }} >Phường/Xã : Thị Trấn Lai Vung</Text>
              <Text style={{ fontSize: 14 }} >Quận/Huyện : Huyện Lai Vung </Text>
              <Text style={{ fontSize: 14 }} >Tỉnh/TP : Đồng Tháp</Text>
            </Block>

          </Block>
        </Block>
      </Block>
      <Block height={windowHeight * 0.1} width={windowWidth} justifyCenter alignCenter row marginTop={20} alignSelf='center' >
        <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0.3, y: 0.8 }}
          colors={['#fc4a1a', '#f7b733']}
          style={{ height: '70%', paddingLeft: 15, paddingRight: 15, borderRadius: 15, width: '60%', flexDirection: 'row', alignItems: 'center' }} >
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', textAlign: 'center', letterSpacing: 2, }} >Giữ để xác nhận</Text>

        </LinearGradient>

        <LinearGradient
          start={{ x: 0.8, y: 0 }}
          colors={['#FF416C', '#f7b733', '#FF4B2B']}
          style={{ justifyContent: 'center', height: 75, width: 75, borderRadius: 35, alignItems: 'center' }} >
          <Button>
            <MaterialCommunityIcons name="fingerprint" size={40} />
          </Button>
        </LinearGradient>
        <ModalEditAddress />

      </Block>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  renderContainer: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 10,
    marginHorizontal: '10%',
    alignItems:'center'
  },
  renderSubContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center'
  },
  renderTextRight: {
    color: 'black',
    marginHorizontal: 20,
  },
  locationContainer: {
    height: 150,
    backgroundColor: 'white',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'flex-end',
  },
  locationSubContainer: {
    height: '80%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addLocationContainer: {
    height: 100,
    width: 70,
    backgroundColor: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
})

export default Payment;