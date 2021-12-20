import React from 'react';
import { Block, Button } from '../../components';
import { Dimensions, KeyboardAvoidingView, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';

import { SafeAreaView } from 'react-navigation';
import { FontAwesome5, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ExtendsScreen = (props) => {

    const extendData = [
        {
            title: 'Thông tin tài khoản',
            iconType: FontAwesome5,
            iconName: 'user-tie',
            onPress: () => props.navigation.navigate('Profile')
        },
        {
            title: 'Phân biệt trứng',
            iconType: MaterialCommunityIcons,
            iconName: 'card-search',
            onPress: () => {}
        },
        {

            title: 'Thống kê doanh thu',
            iconType: Entypo,
            iconName: 'bar-graph',
            onPress: () => {}
        },
        {
            title: 'Liên hệ',
            iconType: AntDesign,
            iconName: 'message1',
            onPress: () => {}
        },
        
    ]

    return (

        <Block marginTop={20} flex={1}  >
            <ImageBackground source={require('../../assets/image/morong_background.jpg')}
                resizeMode='cover'
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    extendData.map((item,index)=>{
                        return(
                            <Block key={index.toString()} height={windowHeight*0.06} width={windowWidth*0.5} row marginBottom={10} alignCenter justifyCenter shadow backgroundColor='white' radius={10} >
                            <Button  height={windowHeight*0.06} width={windowWidth*0.5} row  alignCenter row
                                onPress={()=>item.onPress()}
                            >
                                <item.iconType  name={item.iconName} size={windowHeight*0.045} color='black' />
                                <Text style={{
                                    marginLeft:10
                                }}>{item.title}</Text>
                            </Button>
                            </Block>
                        
                        )
                    })
                }

            </ImageBackground>
        </Block>




    )

}

const styles = StyleSheet.create({
    container: {
        height: 450,
        width: 300,
        zIndex: 999,
        backgroundColor: 'red',
        borderRadius: 30,
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        overflow: 'hidden',
        borderWidth: 1,
    },
})


export default ExtendsScreen;