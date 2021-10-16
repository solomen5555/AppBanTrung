import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ProductContainer from '../screen/Products/ProductContainer'

const HomeStack = createStackNavigator();
function HomeNavigation() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeScreen' component={ProductContainer}
                options={{
                    headerShown: false
                }} />
        </HomeStack.Navigator>
    )

}

export default function HomeNavigator () {
    return <HomeNavigation />
}