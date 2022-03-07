import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";

import { 
  StyleSheet,
  View,
  Text,
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
          <Text>Loading</Text>
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
                component = {RegisterScreen} />
        </Stack.Navigator>
  
      </NavigationContainer>
      )
    }

    return(
      <Provider store = {store}>
        <MainScreen/>

        
      </Provider>
      
    )
    
    
  }
}

export default App



