import React ,{useState, useEffect} from 'react';
import {
    StyleSheet,FlatList, TextInput,Dimensions, SafeAreaView
} from 'react-native';
import {
    Block,Text
}from '../../components'

import ProductList from './components/ProductList';
import { AntDesign } from '@expo/vector-icons';
import Banner from './components/Banner';

const data = require('../../assets/data/products.json');
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductContainer = () =>{
const [products,setProducts] = useState([]);
const [productsFilter,setProductsFilter] = useState([]);

useEffect(()=>{
    setProducts(data);
    setProductsFilter(data);
    return () =>{
        setProducts([]);
    }
        
},[])



const searchProduct = keyword => { 
    console.log('keyword',keyword)
    if(keyword != null ){
        let newArray = productsFilter.filter((value, key) => {
            let stringSum = `${value.Ten}`;
            return stringSum.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) != -1;
          });
      
          setProducts(newArray);
    }else {
        setProducts(productsFilter);
    }
   
  };

    return (
            <SafeAreaView height={windowHeight} flex={1}>
             <Block height='8%' paddingHorizontal={5} marginHorizontal={5} row alignCenter radius={10} border={5} borderColor='grey' >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
            placeholder='Bạn muốn tìm gì...'
            style={{height:'100%',marginHorizontal:5,width:windowWidth-24-30}}
            placeholderTextColor={'grey'}
            
            onChangeText={text=>{
               
                searchProduct(text)}}
            />
            </Block>
            
            <Block height='92%' marginBottom={50} marginTop={5} backgroundColor='gainsboro'  >
        {products.length > 0 ? <FlatList 
            numColumns={2}
            data={products}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>
                    <ProductList 
                    key={item.id}
                    item ={item}
                     />  
            }
            ListHeaderComponent={()=>
                <Block justifyCenter alignCenter  >
                <Banner />
            </Block>
            }

            /> : <Block backgroundColor='#fff' justifyCenter alignCenter  >
                <Text>Không có sản phẩm</Text>
                 </Block> }    
        
        </Block>
        </SafeAreaView>
            
          
       
        
    )
}

export default ProductContainer;