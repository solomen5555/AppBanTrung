import React, { useContext,useRef,useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Block } from '../components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import ProductContainer from '../screen/Products/ProductContainer';
import 'react-native-gesture-handler';
import { TouchableOpacity,Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const TabButton = (props) => {

    const { item, onPress, accessibilityState } = props;
    //  console.log(props)
    const focused = accessibilityState.selected;
    const viewRef =useRef();

    useEffect(()=>{
        if(focused){
            viewRef.current.animate({0: {scale :1,rotate:'0deg'}, 1: {scale:1.5,rotate:'360deg'}});
        }else{
            viewRef.current.animate({0: {scale :1.5,rotate:'360deg'}, 1: {scale:1,rotate:'0deg'}});
        }
    },[focused])

    return (

        <Block flex={1} justifyCenter alignCenter >
            <TouchableOpacity onPress={onPress} activeOpacity={1} >
                <Animatable.View ref={viewRef}  duration={1000} style={{
                    flex:1,justifyContent:'center',alignItems:'center'
                }} >
                    <item.type name={focused ? item.activeIcon : item.isActiveIcon} size={30} color={focused ? '#ffa801' : '#ffda79'} />
                </Animatable.View>
            </TouchableOpacity>
        </Block>

    )
}

const HomeStack = createStackNavigator();
const HomeNavigation = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeScreen' component={ProductContainer}
                options={{
                    headerShown: false
                }} />
        </HomeStack.Navigator>
    );

}


const TabArr = [
    { route: 'Home', label: 'Home', type: Ionicons, activeIcon: 'home', isActiveIcon: 'home-outline', component: HomeNavigation },
    { route: 'User', label: 'User', type: FontAwesome, activeIcon: 'user-circle', isActiveIcon: 'user-circle-o', component: HomeNavigation }
]



const Tab = createBottomTabNavigator();
const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeTab'
            screenOptions={{
                headerShown: false,
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#e91e63',
                tabBarStyle: {
                    height: windowHeight*0.08,
                    position: 'absolute',
                    bottom: windowHeight*0.02,
                    right: windowHeight*0.02,
                    left: windowHeight*0.02,
                    borderRadius: 16
                }
            }}
        >
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index.toString()} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}

                    />
                )
            }
            )}
        </Tab.Navigator>
    )
}

export default Main;