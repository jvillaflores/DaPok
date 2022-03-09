import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-paper";
import Svg, { Path, G, Rect, Polygon, Title } from "react-native-svg";

import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
    this.onReset = this.onReset.bind(this);
  }

  onReset() {
    const { email } = this.state;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
            <View style = {{alignItems:"center"}}>
                <Text style = {styles.Text}>Trouble Logging In?</Text>
                <Text style = {{textAlign:"center" , paddingTop:10}}> Enter your email and we'll send you a link
                  to get back into your account.
                </Text>
            </View>
            <View style = {{paddingVertical: 20}}>
                <TextInput
                  label="Email"
                  activeUnderlineColor="#1F465B"
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                 
                />
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => this.onReset()}>
                    <Text style={styles.text}>Reset Email</Text>
                  </Pressable>
            </View>
            <View style = {styles.BackButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style = {{color:"#1F465B"}}>Back To Log In</Text>
                </TouchableOpacity>
          </View>
      </View>
     
    );
  }
}

// export function Landing({ navigation }) {
//   return (

//   );
// }

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:30,
    paddingVertical:150,
    alignContent:"center",
    
  },
  Text:{
    fontSize:20,
    fontWeight:"bold"
  },
  input: {
    paddingVertical: 10,
    width: "100%",
    marginTop: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingLeft: 10,
  },
  textGrey: {
    fontSize: 15,
    color: "grey",
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    elevation: 1,
    width: "100%",
    backgroundColor: "#1F465B",
  },
  
  text: {
    alignSelf: "center",
    fontSize: 18,

    letterSpacing: 0.25,
    color: "white",
  },
  BackButton:{
    flex:1,
    alignItems:"flex-end",
    justifyContent:"center",
    flexDirection:"row",
  }
});
