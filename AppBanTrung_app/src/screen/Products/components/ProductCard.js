import React,{useState,useEffect} from 'react';
import {
    TouchableOpacity, Dimensions,StyleSheet,
    Image

} from 'react-native';
import { Block,Text,Button } from '../../../components';
import formatMoney from '../../../hooks/fomatMoney';
import { connect,useDispatch,useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import * as actions from '../../../Redux/action/cartAction';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;




const ProductCard = (props) =>{
    const { Ten,Gia ,image,TonKho} = props;
    let dataCart = useSelector(state => state.cartReducer.cart);
   
    // console.log('dataaa',dataCart)

    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    

const AddProduct =(item)=>{
    dispatch(actions.addCart(item,{cart : dataCart}))
}



return (
   <Block style={styles.container}  >
       <Image style={styles.image}
        resizeMode='stretch'
        source={{uri: image ? image :'https://media.healthplus.vn/thumb_x650x382/Images/Uploaded/Share/2017/09/08/nhung-loai-trung-nen-an-de-tot-cho-suc-khoe11504842188.jpg'}}
       />
       <Block style={styles.card} />
       <Text style={styles.title} >
        {Ten.length > 15 ? Ten.substring(0,15-3)+'...': Ten}
       </Text>
       <Text style={styles.price} >
        {formatMoney(Gia)} đ/chục
       </Text>
       
       { TonKho > 0 ? (
           <Block height={windowHeight*0.06} marginTop={windowHeight*0.05} width={(windowWidth/2)-20} marginBottom={windowHeight*0.15} justifyCenter alignCenter radius={10} backgroundColor='orange'>
            <Button onPress={()=>{
                AddProduct(props);
                // props.addProductCart(props)
                // console.log(props)
            }}  >
                <Text>
                    Mua ngay
                </Text>
            </Button>
           </Block>
       ):  <Block height={windowHeight*0.06}  marginTop={windowHeight*0.05} width={(windowWidth/2)-20} marginBottom={50} justifyCenter alignCenter radius={10} backgroundColor='transparent'padding={10}>
           <Text style={{color:'red'}} > Hiện tại hết hàng</Text>
            </Block> }
   </Block>
)

};

// const mapStateToProps = (state) => {
//     const carts = state.cartReducer
//     // console.log('carttt', carts)
//     return {
//         cart: carts,
//     };
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         addProductCart: (product) =>
//             dispatch(actions.addCart({SoLuong: 1, SanPham:product}))     
//     }
// }



const styles = StyleSheet.create({
    container:{
        width:windowWidth/2-20,
        height:windowHeight*0.35,
        borderRadius:10,
        marginTop:windowHeight*0.05,
        marginBottom:0,
        marginLeft:10,
       
        elevation:8,
        backgroundColor:'#fff',
    },
    image:{
        width:windowWidth/2 -20,
        height:windowHeight*0.15,
        backgroundColor:'transparent',
        position:'absolute',
        top: 0,
        borderRadius:10
    },
    card:{
        marginBottom:15,
        height: windowHeight*0.15,
        backgroundColor:'transparent',
        width:windowWidth/2 -20 -10,
        

    },
    title:{
        fontWeight:'bold',
        fontSize:14,
        marginLeft:10
        
    },
    price:{
        fontSize:15,
        color:'#fa8231',
        marginTop:5,
        marginLeft:10
    }

});

export default ProductCard;