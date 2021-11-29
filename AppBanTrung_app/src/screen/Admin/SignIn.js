import React,{useState} from 'react';
import { Block,Button } from '../../components';
import { Dimensions,Text,ImageBackground,TextInput } from 'react-native';
import { AntDesign,MaterialCommunityIcons,FontAwesome, Entypo } from '@expo/vector-icons';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const SignIn = (props) => {

    const [info,setInfo] = useState(
        {
            tenDangNhap : '' ,
            matKhau:'',
        }
    )
console.log('info',info);
    return (
        <Block flex={1} marginTop={windowHeight*0.03} >
            <ImageBackground source={require('../../assets/image/auth.jpg')}
                resizeMode='stretch'
                blurRadius={1}
                style={{
                    flex: 1,
                    
                }}

            >
            
            <Block height={windowHeight*0.97} width={windowWidth} alignCenter justifyEnd  >
           <Block height={windowHeight*0.60} width={windowWidth} backgroundColor='white' borderTopLeftRadius={30} borderTopRightRadius={25} opacity={0.8} justifyCenter  >
             
                <Block alignCenter >
                    <Text style={{fontSize:18,fontWeight:'700',paddingBottom:10}} > Đăng nhập</Text>
                    <Block justifyCenter row  >
                    <Text style={{fontSize:18,fontWeight:'700',color:'orange'}} > ---</Text>
                    <MaterialCommunityIcons name="egg-easter" size={24} color="orange" />
                    <MaterialCommunityIcons name="egg-easter" size={24} color="orange" />
                    <Text style={{fontSize:18,fontWeight:'700',color:'orange'}} > ---</Text>
                    </Block>
               
                </Block>
                <Block height={windowHeight*0.07} width='100%' marginTop={15}  paddingHorizontal={30}  justifyCenter alignCenter >
                <Block row >
                <FontAwesome name="user" size={windowWidth*0.1} color="black" />
                 <TextInput
                 value={info.tenDangNhap}
                 multiline
                placeholder='Tên đăng nhập'
                placeholderTextColor='grey'
                numberOfLines={3}
                 onChangeText={(tenDangNhap)=>setInfo({...info,tenDangNhap:tenDangNhap})}
                style={{
                height:windowHeight*0.06,
                width:'90%',
                color:'black',
                marginLeft:10
              }}
            />
            </Block>
            <Block width={windowWidth*0.6} height={1} backgroundColor='black' />
             </Block> 

             <Block height={windowHeight*0.07} width='100%' marginTop={15} paddingHorizontal={30}  justifyCenter alignCenter >
                <Block row >
                <Entypo name="lock" size={windowWidth*0.1} color="black" />
                 <TextInput
                 value={info.matKhau}
                 multiline
                placeholder='Mật khẩu'
                placeholderTextColor='grey'
                numberOfLines={3}
                 onChangeText={(matKhau)=>setInfo({...info,matKhau:matKhau})}
                style={{
                height:windowHeight*0.06,
                width:'90%',
                color:'black',
                marginLeft:10
              }}
            />
            </Block>
            <Block width={windowWidth*0.6} height={1} backgroundColor='black' />
             </Block> 

            
              
            <Block height={windowHeight*0.08} width={windowWidth}  marginTop={windowHeight*0.03} justifyCenter alignCenter >
              <Button height='90%' width={windowWidth*0.4} backgroundColor='orange' radius={20} justifyCenter alignCenter >
              <Text style={{fontSize:18,fontWeight:'700', color:'white'}} >Đăng nhập</Text>
              </Button>
            </Block>

               
            <Block height={windowHeight*0.05} width={90}  marginTop={windowHeight*0.01}  justifyCenter  >
              <Button height='90%' marginLeft={10} backgroundColor='transparent'  
                onPress ={()=>props.navigation.navigate('SignUp')}
              >
              <Text style={{fontSize:16,fontWeight:'100', color:'orange'}} >Đăng ký !</Text>
              <Block height={2} width={60} backgroundColor='orange' />
              </Button>
            </Block>
                
           </Block>
           </Block>
            </ImageBackground>
        </Block>
    )
}

export default SignIn;