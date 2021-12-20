import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Picker, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Block,Button } from '../../components';
import { Text } from '../../components';
import { onIsLoadingTrue, onIsLoadingFalse } from '../../Redux/action/appLoadingAction';
import { useDispatch } from 'react-redux';
import { orderApi } from '../../api';
import Toast from "react-native-toast-message";
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import formatMoney from '../../hooks/fomatMoney';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useFonts } from 'expo-font';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Order = (props) => {
    const [pickedTrangThai, setPickedTrangThai] = useState('Tất cả hóa đơn');
    const [pickedTrangThaiDuyet, setPickedTrangThaiDuyet] = useState('Chọn trạng thái');
    const [orders, setOrders] = useState([])
    const [ordersOri, setOrdersOri] = useState([])
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [fontsLoaded, error] = useFonts({
        Lobster_400Regular,
    });

    useEffect(() => {

    
        GetAllOrder();


    }, [isFocused])
    console.log('oderrrrrrrList',orders);

    const GetAllOrder = async () => {
        dispatch(onIsLoadingTrue())
        try {
            let data = await orderApi.GetAllOrder()
            if (data.data.success == true) {
                setOrders(data.data.response);
                setOrdersOri(data.data.response);
                dispatch(onIsLoadingFalse())
            } else {
                dispatch(onIsLoadingFalse())
                Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: "Tải dữ liệu thất bại",
                    text2: 'Xin vui lòng thử lại sau '
                })
            }
        } catch (err) {
            console.log(err);
            dispatch(onIsLoadingFalse())
        }

    }

    const DuyetHoaDon = async (id) =>{
        let flag = true
        if(pickedTrangThaiDuyet == 'Chọn trạng thái'){
            Toast.show({
                topOffset: 60,
                type: 'error',
                text1: "Duyệt thất bại",
                text2: 'Vui lòng chọn trạng thái cần duyệt'
            })
            flag = false;
        }

        if(flag){
            dispatch(onIsLoadingTrue())
            try{
                let data = await orderApi.EditOrder(id,pickedTrangThaiDuyet);
                if(data?.data.success==true){
                    dispatch(onIsLoadingFalse())
                    Toast.show({
                        topOffset: 60,
                        type: 'success',
                        text1: "Duyệt hóa đơn thành công",
                        text2: ' '
                    })
                    setTimeout(()=>{
                        GetAllOrder();
                    },500)
                }else{
                dispatch(onIsLoadingTrue())
                Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: "Duyệt thất bại",
                    text2: 'Vui lòng thử lại sau'
                })
                }

            }catch(err){
                console.log(err)
                dispatch(onIsLoadingTrue())
                Toast.show({
                    topOffset: 60,
                    type: 'error',
                    text1: "Duyệt thất bại",
                    text2: 'Vui lòng chọn trạng thái cần duyệt'
                })
            }
        }

    }


    return (
        <Block marginTop={windowHeight*0.035} height={windowHeight * 0.9} width={windowWidth}  >
            <Block height={windowHeight * 0.07} alignCenter row backgroundColor='orange' >
                    <Button marginLeft={windowWidth * 0.02} onPress={() => props.navigation.goBack()} >
                        <AntDesign name="left" size={30} color="black" />
                    </Button>
                    <Block width={windowWidth * 0.8} justifyCenter alignCenter  >
                        {fontsLoaded ? <Text style={{ fontFamily: 'Lobster_400Regular', fontSize: 24, color: 'black' }} > Quản lý hóa đơn </Text> : null}
                    </Block>
                </Block>
            <Block height='10%' width='100%' border={5} borderColor='orange' radius={10} justifyCenter alignCenter >
                <Picker
                    selectedValue={pickedTrangThai}
                    style={{ height: windowHeight * 0.06, width: '90%', color: 'orange' }}
                    onValueChange={(itemValue, itemIndex) => {
                        setPickedTrangThai(itemValue)
                        if(itemValue == 'Tất cả hóa đơn'){
                            setOrders(ordersOri);
                        }else{
                            let od = ordersOri.filter(item=>item.TrangThai == itemValue)
                            setOrders(od);
                        }
                        
                    }}
                >
                    <Picker.Item label="Tất cả hóa đơn" value='Tất cả hóa đơn' />
                    <Picker.Item label="Đang xử lý" value='Đang xử lý' />
                    <Picker.Item label="Đang vận chuyển" value='Đang vận chuyển' />
                    <Picker.Item label="Đã giao" value='Đã giao' />
                    <Picker.Item label="Đã hủy" value='Đã hủy' />

                </Picker>
            </Block>
            <Block height='75%' width='100%' marginTop={10}  >
                <FlatList  

                data={orders}
                inverted
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>{
                    return(
                        <Block marginTop={10} height={windowHeight*0.6} width={windowWidth} shadow backgroundColor='#ffeaa7' radius={10} >
                            <Block height={windowHeight*0.1} width={windowWidth} backgroundColor='#fdcb6e' justifyCenter alignCenter radius={20} >
                            <FlatList 
                            data={item?.DsSanPham}
                            horizontal={true}
                            keyExtractor={(item,index)=>index.toString()}
                            renderItem={({item,index})=>{
                                return(
                                    <Block  row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.07} width={windowWidth}  >
                                        <Text>{item?.SanPham.Ten}</Text>
                                        <Text>X{item?.SoLuong}</Text>
                                    </Block>
                                )
                            }}
                            />
                            <Block row justifyContent='space-between' width={windowWidth} >
                            <MaterialCommunityIcons name="gesture-swipe-right" size={30} color="black" />
                            <MaterialCommunityIcons name="gesture-swipe-left" size={30} color="black" />
                            </Block>
                            </Block>
                            
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth}  >
                                <Text>Trạng thái</Text>
                                <Text>{item.TrangThai}</Text>
                            </Block>
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth} >
                                <Text>Tổng tiền</Text>
                                <Text>{formatMoney(item.TongTien)}đ</Text>
                            </Block>
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth}  >
                                <Text>Ngày mua</Text>
                                <Text>{moment(item.NgayMua).format('DD/MM/YY')}</Text>
                            </Block>
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth}  >
                                <Text>Khách hàng</Text>
                                <Text>{item.TaiKhoan.Ten}</Text>
                            </Block>
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth}  >
                                <Text>Số điện thoại</Text>
                                <Text>{item.SoDienThoai}</Text>
                            </Block>
                            <Block row justifyContent='space-between' alignCenter paddingHorizontal={20}  height={windowHeight*0.05} width={windowWidth}  >
                                <Text>Loại giao dịch</Text>
                                <Text>{item.LoaiGiaoDich}</Text>
                            </Block>
                            <Block height='10%' width='100%' border={5} borderColor='orange' radius={10} justifyCenter alignCenter >
                <Picker
                    selectedValue={pickedTrangThaiDuyet}
                    style={{ height: windowHeight * 0.06, width: '90%', color: 'orange' }}
                    onValueChange={(itemValue, itemIndex) => {
                        setPickedTrangThaiDuyet(itemValue)
                       
                    }}
                >
                    <Picker.Item label="Chọn trạng thái " value='Chọn trạng thái' />
                    <Picker.Item label="Đang xử lý" value='Đang xử lý' />
                    <Picker.Item label="Đang vận chuyển" value='Đang vận chuyển' />
                    <Picker.Item label="Đã giao" value='Đã giao' />
                    <Picker.Item label="Đã hủy" value='Đã hủy' />

                </Picker>
            </Block>
                            <Block marginTop={15} height={windowHeight*0.12} width={windowWidth}  justifyCenter alignCenter  >
                                <Button height='70%' width='60%' backgroundColor='#feca57' radius={20} justifyCenter alignCenter
                                    onPress={()=>DuyetHoaDon(item._id)}
                                >
                                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} >Duyệt hóa đơn</Text>
                                </Button>
                            </Block>
                        </Block>
                    )
                }}
                
                />
            </Block>

        </Block>
    )
}

export default Order;