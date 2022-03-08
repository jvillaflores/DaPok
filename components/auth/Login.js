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
    const { navigation } = this.props;
    const { secureTextEntry } = this.state;
    const { password } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to KAAG,</Text>
          <Text style={styles.subtitle}>Sign in to continue!</Text>
        </View>
        <View style={styles.loginGroup}>
          <View style={styles.space}>
            <TextInput
              label="Email"
              keyboardType="email-address"
              activeUnderlineColor="#8E2835"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.space}>
            {secureTextEntry == true ? (
              <TextInput
                label="Password"
                secureTextEntry={secureTextEntry}
                iconSize={25}
                iconColor={"#222222"}
                onChangeText={(password) => this.setState({ password })}
                value={password}
                activeUnderlineColor="#8E2835"
                right={
                  <TextInput.Icon
                    name="eye"
                    onPress={() => {
                      this.setState({ secureTextEntry: false });
                      return false;
                    }}
                  />
                }
              />
            ) : null}
            {secureTextEntry == false ? (
              <TextInput
                label="Password"
                secureTextEntry={secureTextEntry}
                iconSize={25}
                iconColor={"#222222"}
                onChangeText={(password) => this.setState({ password })}
                value={password}
                activeUnderlineColor="#8E2835"
                right={
                  <TextInput.Icon
                    name="eye-off"
                    onPress={() => {
                      this.setState({ secureTextEntry: true });
                      return true;
                    }}
                  />
                }
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.textMini}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 30 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onSignUp()}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* <Pressable style={styles.buttonGoogle} onPress={() => this.onSignUp()}>
                  <Svg id="search" xmlns="http://www.w3.org/2000/svg" width="22.845" height="22.845" viewBox="0 0 22.845 22.845">
                    <Path id="Path_382" data-name="Path 382" d="M5.063,145.9l-.8,2.969-2.906.061a11.442,11.442,0,0,1-.084-10.666h0l2.588.474L5,141.314a6.817,6.817,0,0,0,.064,4.59Z" transform="translate(0 -132.099)" fill="#fbbb00"/>
                    <Path id="Path_383" data-name="Path 383" d="M272.6,208.176a11.418,11.418,0,0,1-4.072,11.041h0l-3.259-.166-.461-2.879a6.808,6.808,0,0,0,2.929-3.476h-6.108v-4.519H272.6Z" transform="translate(-249.954 -198.887)" fill="#518ef8"/>
                    <Path id="Path_384" data-name="Path 384" d="M47.72,315.933h0a11.426,11.426,0,0,1-17.212-3.495l3.7-3.03A6.793,6.793,0,0,0,44,312.887Z" transform="translate(-29.148 -295.604)" fill="#28b446"/>
                    <Path id="Path_385" data-name="Path 385" d="M46.06,2.63l-3.7,3.029A6.792,6.792,0,0,0,32.346,9.216L28.625,6.169h0A11.425,11.425,0,0,1,46.06,2.63Z" transform="translate(-27.347)" fill="#f14336"/>
                  </Svg>
            <Text style={styles.textGoogle}> 
                
                    Connect with Google </Text>
         </Pressable> */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>
              I'm a new user. <Text style={styles.textSignUp}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// export function Landing({ navigation }) {
//   return (

//   );
// }

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
    //flex: 1,
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
