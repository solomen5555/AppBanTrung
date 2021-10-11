import React from 'react';
import {
    TouchableOpacity, Dimensions,StyleSheet,
    Image

} from 'react-native';
import { Block,Text,Button } from '../../../components';
import formatMoney from '../../../hooks/fomatMoney';

var {width} = Dimensions.get('window');

const ProductCard = (props) =>{
    const { Ten,Gia ,image,TonKho} = props;

return (
   <Block style={styles.container} >
       <Image style={styles.image}
        resizeMode='contain'
        source={{uri: image ? image :'https://media.healthplus.vn/thumb_x650x382/Images/Uploaded/Share/2017/09/08/nhung-loai-trung-nen-an-de-tot-cho-suc-khoe11504842188.jpg'}}
       />
       <Block style={styles.card} />
       <Text style={styles.title} >
        {Ten.length > 15 ? Ten.substring(0,15-3)+'...': Ten}
       </Text>
       <Text style={styles.price} >
        {formatMoney(Gia)}đ
       </Text>
       { TonKho > 0 ? (
           <Block marginBottom={60} radius={5} backgroundColor='#4cd137'padding={10}>
            <Button  >
                <Text>
                    Mua ngay
                </Text>
            </Button>
           </Block>
       ): <Text style={{marginTop:20}}>Hiện tại hết hàng</Text> }
   </Block>
)

};

const styles = StyleSheet.create({
    container:{
        width:width/2-20,
        height:width/1.7,
        paddingHorizontal:10,
        borderRadius:10,
        marginTop:55,
        marginBottom:10,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        backgroundColor:'#f6e58d',
    },
    image:{
        width:width/2 -20 -10,
        height:width/2 - 20 -30,
        backgroundColor:'transparent',
        position:'absolute',
        top: -45
    },
    card:{
        marginBottom:10,
        height: width/2-20-90,
        backgroundColor:'transparent',
        width:width/2 -20 -10

    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center'
    },
    price:{
        fontSize:20,
        color:'#fa8231',
        marginTop:10
    }

});

export default ProductCard;