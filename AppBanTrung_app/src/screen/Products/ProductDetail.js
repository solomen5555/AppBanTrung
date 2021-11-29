import React, { useState, useEffect } from 'react';
import { Block, Button } from '../../components';
import { Image, ScrollView, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import formatMoney from '../../hooks/fomatMoney';
import { navigate } from '../../router/NavigationService';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ProductDetail = (props) => {

    const [fontsLoaded, error] = useFonts({
        Lobster_400Regular,
        GreatVibes_400Regular,
    })

    // const [fontsLoaded1,error1] =  useFonts({ 
    //     GreatVibes_400Regular,
    // })


    console.log(fontsLoaded)

    // if(!fontsLoaded){
    //     return <AppLoading />
    // }

    const [product, setProduct] = useState(props.route.params.item);
    // console.log(product);
    return (
        <SafeAreaView style={{ position: 'absolute', height: '100%' }} >
            <Button position='absolute' height='10%' width={windowWidth * 0.2} row backgroundColor='#fff' shadow={10} marginHorizontal={windowWidth * 0.05} radius={20} paddingHorizontal={10} alignCenter justifyCenter marginLeft={windowWidth*0.78} marginTop={windowHeight*0.05} 
            onPress={()=>props.navigation.goBack()}
            >
            <Fontisto name="shopping-basket-add" size={windowWidth * 0.1} color="#f0932b" />
            </Button>
            <Block height='90%' >
            <ScrollView >
                <Block height={windowHeight*0.5} >
                    <Image
                        source={{
                            uri: product.image ? product.image : 'https://media.healthplus.vn/thumb_x650x382/Images/Uploaded/Share/2017/09/08/nhung-loai-trung-nen-an-de-tot-cho-suc-khoe11504842188.jpg'
                        }}
                        resizeMode="contain"
                        style={{
                            height: windowHeight * 0.5,
                            width: windowWidth
                        }}
                    />
                </Block>
                <Block justifyCenter alignCenter height='5%' >
                    {!fontsLoaded ? null : <Text style={{ fontFamily: 'Lobster_400Regular', fontSize: 40 }} >{product.Ten}</Text>}
                </Block>
                <Block justifyCenter alignCenter row height='5%'  >
                    <MaterialCommunityIcons name="egg-easter" size={24} color="#f39c12" />
                    {!fontsLoaded ? null : <Text style={{ fontFamily: 'GreatVibes_400Regular', fontSize: 20 }} >{product.ThuongHieu}</Text>}
                    <MaterialCommunityIcons name="egg-easter" size={24} color="#f39c12" />
                </Block>
                <Text style={{fontSize:50}} >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
               
                <Block height='14%' marginHorizontal={windowHeight*0.02} backgroundColor='#dcdde1' /> 
            </ScrollView>
            </Block>
            
        </SafeAreaView>
    )
}

export default ProductDetail;