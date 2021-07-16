/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Sineupscreen from './src/screens/Sineupscreen';
import SignIn from './src/screens/Signin';
//
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator()
//


const HomeStackScreen = ()=>{
  return(
   <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />     
   </HomeStack.Navigator>
  )
 }

const TabStackScreen = ()=>{
  
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focus,color,size})=>{
        let iconName;
        if (route.name == 'SignIn') {
          iconName = focus ? 'sign-in' : 'sign-in'
        }else if(route.name == 'Signup'){
          iconName = focus ? 'home' : 'home'          
        }
        return <Icon name={iconName} size={size} color={color} />;
      },

    }) }
    tabBarOptions={{activeTintColor:'tomato',inactiveTintColor:'gray'}}
    >
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="Signup" component={Sineupscreen} />
    </Tab.Navigator>
  )
}



const App= () => {
  const [isAuth, setisAuth] = useState(false)

    //
  return (
   <NavigationContainer>   
     <TabStackScreen />
   </NavigationContainer>
  );
};

// styles
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
