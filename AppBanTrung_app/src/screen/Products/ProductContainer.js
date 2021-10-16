import React, { useState, useEffect } from 'react';
import {
    StyleSheet, FlatList, TextInput, Dimensions, SafeAreaView, KeyboardAvoidingView,
    Platform, Modal, Pressable, TouchableOpacity
} from 'react-native';
import {
    Block, Text
} from '../../components'

import ProductList from './components/ProductList';
import { AntDesign } from '@expo/vector-icons';

import Banner from './components/Banner';
import ProductFilter from './components/ProdctFilter';

const data = require('../../assets/data/products.json');
const category = require('../../assets/data/categories.json')
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [isFilter, setIsFilter] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);

    useEffect(() => {
        setProducts(data);
        setProductsFilter(data);
        setCategories(category);
        setActive(-1);
        setInitialState(data);
        return () => {
            setProducts([]);
            setCategories([]);
            setActive();
            setInitialState([]);
        }

    }, [])

    console.log('isFilter', isFilter)

    const searchProduct = keyword => {
        console.log('keyword', keyword)
        if (keyword != null) {
            let newArray = productsFilter.filter((value, key) => {
                let stringSum = `${value.Ten}`;
                return stringSum.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1;
            });

            setProducts(newArray);
        } else {
            setProducts(productsFilter);
        }

    };

    // const ModalFilter = () =>{
    //     return (
    //         <Block  flex={1} justifyCenter alignCenter marginTop ={22} >
    //           <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={modalFilter}
    //             onRequestClose={() => {
    //              // Alert.alert("Modal has been closed.");
    //               setModalVisible(!modalFilter);
    //             }}
    //           >
    //             <Block height={windowHeight*0.8} width={windowWidth*0.3} marginTop={windowHeight*0.2} backgroundColor='#fff' >

    //             </Block>
    //           </Modal>
    //           <Pressable

    //             onPress={() => setModalVisible(true)}
    //           >
    //             <Text >Show Modal</Text>
    //           </Pressable>
    //         </Block>
    //       );
    // }

    return (
        <SafeAreaView flex={1} backgroundColor='#dcdde1' >
            <Block row height={windowHeight * 0.08} backgroundColor='#fff' >

                <Block height={windowHeight * 0.08} paddingHorizontal={5} marginHorizontal={5} row alignCenter radius={10} border={5} borderColor='grey' >
                    <AntDesign name="search1" size={24} color="black" />
                    <TextInput
                        placeholder='Bạn muốn tìm gì...'
                        style={{ height: '100%', marginHorizontal: 5, width: windowWidth * 0.7 }}
                        placeholderTextColor={'grey'}

                        onChangeText={text => {

                            searchProduct(text)
                        }}
                    />
                </Block>
                <Block justifyCenter alignCenter >
                    <TouchableOpacity onPress={() => setIsFilter(!isFilter)} >
                        <AntDesign name="filter" size={windowWidth * 0.1} color="black" />
                    </TouchableOpacity>
                </Block>
            </Block>


            <Block height='78%' width='100%'  row >
                {isFilter ? <Block backgroundColor='#f7b731' borderColor='#f7b731' height='100%' width='30%' borderRadius={10} border={5} >
                    <ProductFilter category={categories} isFilter={isFilter} setIsFilter={setIsFilter}
                        products={products} setProducts={setProducts} productsFilter={productsFilter}
                        setProductsFilter={setProductsFilter}
                    />
                </Block> : null}
                <Block height='100%' marginBottom={50} marginTop={5} backgroundColor='#dcdde1' width={!isFilter ? '100%' : '70%'} >
                    {products.length > 0 ? <FlatList
                        numColumns={2}
                        data={products}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <ProductList
                                key={item.id}
                                item={item}
                            />
                        }
                        ListHeaderComponent={() =>
                            <Block justifyCenter alignCenter  >
                                <Banner />
                            </Block>
                        }

                    /> : <Block backgroundColor='#fff' justifyCenter alignCenter  >
                        <Text>Không có sản phẩm</Text>
                    </Block>}

                </Block>
            </Block>
            <Block height='14%' marginHorizontal={windowHeight*0.02} backgroundColor='#dcdde1' />
            {/* <Block>
                {ModalFilter()}
            </Block> */}

        </SafeAreaView>




    )
}

export default ProductContainer;