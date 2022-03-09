import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import 'react-native-gesture-handler';

import { 
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
//allow use the dispatch function
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// This import loads the firebase namespace.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAYcFQheZ9scuPnsfn6doXXxfAq9nZKu4Y",
  authDomain: "dapok-app.firebaseapp.com",
  projectId: "dapok-app",
  storageBucket: "dapok-app.appspot.com",
  messagingSenderId: "598253020006",
  appId: "1:598253020006:web:b456cdd8104a9d452c1ea7"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import MainScreen, { Main } from './components/Main'
import LoginScreen from './components/auth/Login'
import ForgotPasswordScreen from './components/auth/ForgotPassword';


const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent:'center'}}>
          <ActivityIndicator size="large" color="#215A88" />
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen 
                name ="Landing" 
                component = {LandingScreen} 
                options={{headerShown:false}}/>  
            <Stack.Screen 
                name ="Register" 
                component = {RegisterScreen} 
                options={{
                  headerShadowVisible: true,
                  headerTintColor: "#1F465B",
                  headerStyle: {
                    backgroundColor: "#F2F2F2",
                    borderBottomWidth: 0,
                  },
                }}/>
              <Stack.Screen 
                name ="ForgotPassword" 
                component = {ForgotPasswordScreen} 
                options={{
                  headerShown:false,
                  headerShadowVisible: false,
                  headerTintColor: "#1F465B",
                  headerStyle: {
                    backgroundColor: "#F2F2F2",
                    borderBottomWidth: 0,
                  },
                }}/>
            <Stack.Screen 
                name ="Login" 
                component = {LoginScreen} 
                options={{
                  headerShadowVisible: true,
                  headerTintColor: "#1F465B",
                  headerStyle: {
                    backgroundColor: "#F2F2F2",
                    borderBottomWidth: 0,
                  },
                  }}/>
            {/* <Stack.Screen 
                name ="Home" 
                component = {HomeScreen} 
                options={{headerShown:true}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
    return(
      <Provider store = {store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen 
                        name ="Main" 
                        component = {MainScreen} 
                        options={{headerShown:false}}/>
                        
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    )
  }
}
export default App



