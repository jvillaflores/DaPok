import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { TextInput } from "react-native-paper";

import Svg, { Path, G, Rect, Polygon, Title } from "react-native-svg";
import RegisterScreen from "./Register";
import firebase from "firebase/app";
import Register from "./Register";
require("firebase/auth");

// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      secureTextEntry: true,
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert("Email or password is incorrect");
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to KAAG,</Text>
          <Text style={styles.subtitle}>Sign in to continue!</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignContent: "center",
  },
  space: {
    paddingVertical: 5,
  },
  banner: {
    alignContent: "center",
    justifyContent: "center",
    top: 70,
    left: 40,
  },
  bottom: {
    bottom: 20,
    marginBottom: 45,
  },
  loginGroup: {
    paddingTop: 80,
  },
  miniGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 200,
    left: 240,
  },

  welcome: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "grey",
  },
  button: {
    paddingVertical: 16,
    borderRadius: 10,
    elevation: 1,
    width: "100%",
    backgroundColor: "#8E2835",
  },

  text: {
    alignSelf: "center",
    fontSize: 18,

    letterSpacing: 0.25,
    color: "white",
  },
  logo: {
    width: 16,
    height: 16,
    right: 10,
  },
  textGoogle: {
    alignSelf: "center",
    paddingLeft: 40,
    paddingTop: 15,
    fontSize: 18,

    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    position: "absolute",
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
  },
  textMini: {
    flex: 1,
    fontSize: 12,
    color: "gray",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  textSignUp: {
    fontSize: 14,
    color: "#8E2835",
    fontWeight: "bold",
    left: 200,
  },
  input: {
    height: 45,
    width: "100%",
    marginTop: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 10,
  },
});
