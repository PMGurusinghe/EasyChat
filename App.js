import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Makaton from './Screen/Makaton';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import AddChatScreen from './Screen/AddChatScreen';
import ChatScreen from './Screen/ChatScreen';
import Msymbol from './Screen/Msymbol';



const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#43E68D"},
  headerTitleStyle: {color: "white" ,fontWeight: 'bold'},
  headerTintColor: "white",
  headerTitleAlign: "center",
  
};


export default function App() {
  return (
    <NavigationContainer> 
     
      <Stack.Navigator 
      // initialRouteName="Home"
      screenOptions={globalScreenOptions}
      >
       <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Register' component={RegisterScreen}/>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='AddChat' component={AddChatScreen}/>
       <Stack.Screen name='Chat' component={ChatScreen}/>
       <Stack.Screen name='Symbols' component={Msymbol}/>
       <Stack.Screen name='Makaton' component={Makaton}/>
      
      </Stack.Navigator>
     
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
