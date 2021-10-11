import React from 'react';
import { TouchableOpacity,View,Dimensions,StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window');

const ProductList = (props) =>{
    const {item} = props;
return (
    <TouchableOpacity style={{width:'50%'} }  >
        <View style={{width:width/2,backgroundColor:'gainsboro'}} >
        <ProductCard {...item} />
        </View>
    </TouchableOpacity>
)

};

const styles = StyleSheet.create({

});

export default ProductList;