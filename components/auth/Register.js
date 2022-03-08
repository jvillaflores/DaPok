import React, { Component } from 'react'
import { 
  View,
  Text,  
  Button, 
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
}
from 'react-native'

import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

import { createUserWithEmailAndPassword } from 'firebase/auth';

var logo = require("../../assets/dapok.png");

export class Register extends Component {
    //constructor first function to be called whenever a component is created
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          username: '',
          password: '',
          address: '',
          language: '',
        };
        this.onSignUp = this.onSignUp.bind(this);
      }
    
      onSignUp() {
        const { email, password, name, address, username, language } = this.state;
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            address, 
            username,
            language,
          });
        console.log(result);
      })
      .catch((error) => {
        alert(error);
        console.log('hey there is an error')
      });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1, justifyContent: "center" }}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={{ width: 205, height: 50, left: 10, top: 40 }} />
          </View>
            <Text style={styles.regis}>Register</Text>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "Name"
                onChangeText = {(name) => this.setState({ name })}/>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "Email"
                onChangeText = {(email) => this.setState({ email })}/>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]} 
                placeholder = "Username"
                onChangeText = {(username) => this.setState({ username })}/>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA"}]}
                placeholder = "Password"
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({ password })}/>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "Address"
                onChangeText = {(address) => this.setState({ address })}/>
            <TextInput style={[styles.placeholder, { borderWidth: 3, borderColor: "#BABABA" }]}
                placeholder = "Spoken Language"
                onChangeText = {(language) => this.setState({ language })}/>  
        <TouchableOpacity
            style={[styles.button, { backgroundColor: "#215A88" }]}
            onPress={() => this.onSignUp()}>
            <Text style={[styles.text]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.login, { alignItems: "center" }]}
        onPress={() => navigation.navigate("Register")}>
            <Text>
              Already have an account? <Text style={styles.textSignUp}>Login</Text>
            </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    )
  }
}
export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingVertical: 18,
    alignContent: "center",
  },
  button: {
      alignSelf: "center",
      borderRadius: 20,
      padding: 13,
      margin: 20,
      width: "80%",   
      },
  login:{
    alignSelf: "center",
    margin: 0,
    paddingTop: 0, 
  },
  text: {
      alignSelf: "center",
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "white",
      },
  placeholder: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 10,
      margin: 10 ,
      width: "90%",
      },
  image: {
      alignSelf: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      },
  logoContainer: {
      position: "relative",
      alignSelf: "center",
      top: -30,
      },
  regis: {
      fontSize: 22,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#215A88",
      margin: 20,
      bottom: -15,
      },
  textSignUp: {
    fontSize: 14,
    color: "#215A88",
    fontWeight: "bold",
    left: 250,
  },
  });