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
  ActivityIndicator,
} from "react-native";

import { TextInput } from "react-native-paper";

import Svg, { Path, G, Rect, Polygon, Title } from "react-native-svg";
import RegisterScreen from "./Register";
import firebase from "firebase/app";
import Register from "./Register";
require("firebase/auth");

var logo = require("../../assets/dapok.png");

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
         {/* LOGO */}
         <View style={{alignItems:'center'}}>
           <Image source={logo} style={{ width: 246, height: 66 }} />
        </View>
        <View style={{alignSelf:'center' }}>
                  <Text style={styles.regis}>Login</Text>
        </View>


        <View>
          <View style={[styles.placeholder]}>
            <TextInput 
              label="Email"
              keyboardType="email-address"
              activeUnderlineColor="#BABABA"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={[styles.placeholder1,]}>
            {secureTextEntry == true ? (
              <TextInput
                label="Password"
                secureTextEntry={secureTextEntry}
                iconSize={25}
                iconColor={"#222222"}
                onChangeText={(password) => this.setState({ password })}
                value={password}
                activeUnderlineColor="#BABABA"
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
                activeUnderlineColor="#BABABA"
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
            onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.textMini}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onSignUp()}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text >
                    Don't have account yet? <Text style={styles.textSignUp}>Sign Up</Text>
                  </Text>
    
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 130,
    alignContent: "center",
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
  miniGroup: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    top: 200,
    left: 240,
  },
  button: {
    paddingVertical: 13,
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#1F465B",
  },
  regis: {
    fontSize: 22,
    color: "#1F465B",
    margin: 5,
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
    margin: 20,
  },
  textSignUp: {
    fontSize: 15,
    color: "#215A88",
    fontWeight: "bold",
    left: 200,
  },
logoContainer: {
    position: "relative",
    alignSelf: "center",
    top: -50,
  },
  placeholder: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: "100%",
    },
  placeholder1: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    margin: -15,
    width: "100%",
    },
});


