import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import "react-native-gesture-handler";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
//allow use the dispatch function
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));




// This import loads the firebase namespace.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYcFQheZ9scuPnsfn6doXXxfAq9nZKu4Y",
  authDomain: "dapok-app.firebaseapp.com",
  projectId: "dapok-app",
  storageBucket: "dapok-app.appspot.com",
  messagingSenderId: "598253020006",
  appId: "1:598253020006:web:b456cdd8104a9d452c1ea7",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import MainScreen, { Main } from "./components/Main";
import LoginScreen from "./components/auth/Login";
import ForgotPasswordScreen from "./components/auth/ForgotPassword";
import WordScreen from "./components/main/ChatbotAdd";
import ChatbotScreen from "./components/main/Chatbot";
import CKaganScreen from "./components/main/Data Collection/Chatbot/CKagan";
import CManoboScreen from "./components/main/Data Collection/Chatbot/CManobo";
import CMansakaScreen from "./components/main/Data Collection/Chatbot/CMansaka";
import TKaganScreen from "./components/main/Data Collection/Translate/TKagan";
import TManoboScreen from "./components/main/Data Collection/Translate/TManobo";
import TMansakaScreen from "./components/main/Data Collection/Translate/TMansaka";
import DoneScreen from "./components/main/Contribution/CDone";
import TranslationScreen from "./components/main/Contribution/TranslateSets";
import TransDoneScreen from "./components/main/Contribution/TransDone";
import TransTransScreen from "./components/main/Contribution/TransTrans";
import TransAddWord from "./components/main/Contribution/TransAdd";
import TDone from "./components/main/Contribution/TDone";
import ScreenTranslation from "./components/main/Contribution/ScreenTranslate";
import TransSet2Screen from "./components/main/Contribution/TransSets2";
import Set1Screen from "./components/main/TranslationButtons/Set1";
import reportGenerateScreen from "./components/main/Data Collection/reportGenerate";
import TranslationFolderScreen from "./components/main/Data Collection/Translate/TranslationFolder";
import ChatbotFolderScreen from "./components/main/Data Collection/Chatbot/ChatbotFolder";

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#215A88" />
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShadowVisible: true,
                headerTintColor: "#1F465B",
                headerStyle: {
                  backgroundColor: "#F2F2F2",
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                headerShown: false,
                headerShadowVisible: false,
                headerTintColor: "#1F465B",
                headerStyle: {
                  backgroundColor: "#F2F2F2",
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShadowVisible: true,
                headerTintColor: "#1F465B",
                headerStyle: {
                  backgroundColor: "#F2F2F2",
                  borderBottomWidth: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Chatbot"
              component={ChatbotScreen}
              navigation={this.props.navigation}
              options={{
                title: "Chatbot",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
           

            <Stack.Screen
              name="CKagan"
              component={CKaganScreen}
              navigation={this.props.navigation}
              options={{
                title: "Kagan Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="CManobo"
              component={CManoboScreen}
              navigation={this.props.navigation}
              options={{
                title: "Manobo Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="CMansaka"
              component={CMansakaScreen}
              navigation={this.props.navigation}
              options={{
                title: "Mansaka Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="TKagan"
              component={TKaganScreen}
              navigation={this.props.navigation}
              options={{
                title: "Data Collected",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="TManobo"
              component={TManoboScreen}
              navigation={this.props.navigation}
              options={{
                title: "Manobo Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />

            <Stack.Screen
              name="TMansaka"
              component={TMansakaScreen}
              navigation={this.props.navigation}
              options={{
                title: "Mansaka Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
          <Stack.Screen
              name="TranslationFolder"
              component={TranslationFolderScreen}
              navigation={this.props.navigation}
              options={{
                title: "Translation Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
                headerRight: () => (
                  <View style={{ marginRight: 10 }}>
                    <MaterialCommunityIcons.Button
                      name="folder"
                      size={25}
                      backgroundColor="#215A88"
                      color="#fff"
                      onPress={() => navigation.navigate("EditProfile")}
                    />
                  </View>
                ),
              }}
            />

          <Stack.Screen
              name="ChatbotFolder"
              component={ChatbotFolderScreen}
              navigation={this.props.navigation}
              options={{
                title: "Chatbot Data",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                },
              }}
            />
            
            <Stack.Screen
              name="ChatbotDone"
              component={DoneScreen}
              navigation={this.props.navigation}
              options={{
                title: "Chatbot Done",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="TranslateSets"
              component={TranslationScreen}
              navigation={this.props.navigation}
              options={{
                title: "Sets",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="TranslateDone"
              component={TransDoneScreen}
              navigation={this.props.navigation}
              options={{
                title: "Translation",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="WordScreen"
              component={WordScreen}
              navigation={this.props.navigation}
              options={{
                title: "Sets",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="ScreenTranslate"
              component={ScreenTranslation}
              navigation={this.props.navigation}
              options={{
                title: "Sets",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="TransTrans"
              component={TransTransScreen}
              navigation={this.props.navigation}
              options={{
                title: "Set 1",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="TransSets2"
              component={TransSet2Screen}
              navigation={this.props.navigation}
              options={{
                title: "Set 2",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="TransAddWord"
              component={TransAddWord}
              navigation={this.props.navigation}
              options={{
                title: "Translate",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="TDone"
              component={TDone}
              navigation={this.props.navigation}
              options={{
                title: "Translated",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
            <Stack.Screen
              name="Set1Screen"
              component={Set1Screen}
              navigation={this.props.navigation}
              options={{
                title: "DataSet",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Stack.Screen
              name="Report Generate"
              component={reportGenerateScreen}
              navigation={this.props.navigation}
              options={{
                title: "Generating",
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#215A88",
                  elevation: 0,
                  borderBottomWidth: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
