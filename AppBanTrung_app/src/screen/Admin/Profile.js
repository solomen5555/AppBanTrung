import React from 'react';
import { Block, Button } from '../../components';
import { Text, Dimensions, ImageBackground, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Profile = (props) => {
    return (
        <Block flex={1}  >
            <ImageBackground source={require('../../assets/image/background_profile.jpg')}
                resizeMode='stretch'
                blurRadius={1}
                style={{
                    flex: 1,

                }}

            >
                <Block height={windowHeight * 0.2} width={windowWidth} marginTop={windowHeight * 0.05}  row >
                    <Button backgroundColor='transparent' marginTop={windowHeight * 0.1} marginLeft={10}
                        onPress={() => props.navigation.goBack()}
                    >
                        <AntDesign name="leftcircle" size={windowHeight * 0.06} color="#fff" />
                    </Button>
                    <Image source={require('../../assets/image/user.png')}
                        resizeMode='stretch'
                        style={{
                            height: windowHeight * 0.2,
                            width: windowHeight * 0.2,
                            backgroundColor: 'transparent',
                            borderRadius: 200,
                            marginLeft:windowWidth/6 
                         }}

                    />
                </Block>

                <Block height={windowHeight * 0.7} width={windowWidth} backgroundColor='white' >
                    <Text style={{
                        fontSize: 20,
                        width: windowWidth,
                        textAlign: 'center'
                    }}>
                        Thông tin liên lạc:
                    </Text>
                    <Block height={windowHeight * 0.3} width={windowWidth} row marginVertical={10} >
                        <Block height={windowHeight * 0.3} width={windowWidth * 0.77} marginLeft={windowWidth * 0.03} >
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2}  >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Tài khoản : <Text style={{ fontSize: 15, color: 'black' }} > admin1 </Text> </Text>
                            </Block>
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2} >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Số nhà : <Text style={{ fontSize: 15, color: 'black' }} > 332 Khóm 4 </Text> </Text>

                            </Block>
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2} >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Phường/Xã : <Text style={{ fontSize: 15, color: 'black' }} > Thị Trấn Lai Vung </Text> </Text>

                            </Block>
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2} >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Quận/Huyện : <Text style={{ fontSize: 15, color: 'black' }} > Huyện Lai Vung </Text> </Text>

                            </Block>
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2} >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Tỉnh/Thành phố : <Text style={{ fontSize: 15, color: 'black' }} > Đồng Tháp </Text> </Text>

                            </Block>
                            <Block height={windowHeight * 0.05} width={windowWidth * 0.77} marginBottom={2} >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Số điện thoại : <Text style={{ fontSize: 15, color: 'black' }} > 0921923592 </Text> </Text>

                            </Block>
                        </Block>
                        <Button height={windowHeight * 0.3} width={windowWidth * 0.2} justifyCenter alignCenter >
                            <FontAwesome name="pencil" size={30} color="black" />
                        </Button>
                    </Block>
                    <Block height={windowHeight * 0.16} width={windowWidth} row marginVertical={10} >
                        <Block height={windowHeight * 0.16} width={windowWidth * 0.77} marginLeft={windowWidth * 0.03}  >
                            <Block height={windowHeight * 0.08} width={windowWidth * 0.77} marginBottom={2}  >
                                <Text style={{ fontSize: 17, color: 'grey', }} >Địa chỉ giao hàng 1 : <Text style={{ fontSize: 15, color: 'black' }} > 331 K4, Thị Trấn Lai Vung,Huyện Lai Vung, Đồng Tháp </Text> </Text>
                            </Block>
                            <Block height={windowHeight * 0.08} width={windowWidth * 0.77} marginBottom={2}  >
                                <Text style={{ fontSize: 17, color: 'grey' }} >Địa chỉ giao hàng 2 : <Text style={{ fontSize: 15, color: 'black' }} > 86A K4, Thị Trấn Lai Vung,Huyện Lai Vung, Đồng Tháp  </Text> </Text>

                            </Block>

                        </Block>
                        <Button height={windowHeight * 0.16} width={windowWidth * 0.2} justifyCenter alignCenter >
                            <FontAwesome name="pencil" size={30} color="black" />
                        </Button>
                    </Block>
                    <Block height={windowHeight * 0.08} width={windowWidth} justifyCenter alignCenter >
                        <Button height={windowHeight * 0.06} width={windowWidth * 0.6} backgroundColor='orange' radius={20} justifyCenter alignCenter >
                            <Text style={{fontSize:18,color:'white'}} >Đăng xuất</Text>
                        </Button>
                    </Block>
                </Block>

            </ImageBackground>
        </Block>
    )
}

export default Profile;