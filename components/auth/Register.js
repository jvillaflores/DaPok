import React, { Component } from 'react'
import { 
  View,
  Text,  
  Button,   
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
}
from 'react-native'

import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");


import { TextInput } from "react-native-paper";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import ValidationComponent from "react-native-form-validator";
var logo = require("../../assets/dapok.png");

export default class Register extends ValidationComponent {
    //constructor first function to be called whenever a component is created
    constructor(props) {
        super(props);
        
        this.state = {
          name: "",
          email: "",
          username: "",
          password: "",
          address: "",
          language: "",
          secureTextEntry: true,
        };
        this.onSignUp = this.onSignUp.bind(this);
      }
    
      onSignUp() {
        const { email, password, name, address, username, language } = this.state;

        this.validate({
          email: { email: true },
          name: { required: true },
          password: { required: true },
        });

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
            status: "0",
          });
        console.log(result);
      })
      .catch((error) => {
        alert(error);
        console.log('hey there is an error and did not went through firebase')
      });
  }
  render() {

    const { navigation } = this.props;
    const { secureTextEntry } = this.state;
    const { password } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
                  <Image source={logo} style={{ width: 230, height: 65 }} />
                </View>
          <View style={{flex: 1, justifyContent: "center" }}>
          <Text style={styles.regis}>Register</Text>
               {/* registration field */}
               <View style={styles.placeholder}>
                    <View>
                        {this.isFieldInError("name") &&
                          this.getErrorsInField("name").map((errorMessage) => (
                            <Text style={{ color: "red" }}>
                              Please enter your Full Name
                            </Text>
                          ))}
                        <TextInput style={styles.placeholder}
                          label="Name"
                          activeUnderlineColor="#215A88"
                          onChangeText={(name) => this.setState({ name })}
                        />
                    </View>

                    <View>
                      <TextInput style={styles.placeholder}
                        keyboardType="email-address"
                        label="Email"
                        activeUnderlineColor="#215A88"
                        onChangeText={(email) => this.setState({ email })}
                      />
                    </View>

                    <View style={styles.placeholder}>
                        {this.isFieldInError("username") &&
                          this.getErrorsInField("username").map((errorMessage) => (
                            <Text style={{ color: "red" }}>
                              Please enter your username
                            </Text>
                          ))}
                        <TextInput
                          label="Username"
                          activeUnderlineColor="#215A88"
                          onChangeText={(username) => this.setState({ username })}
                        />
                    </View>

                    {/* <View style={styles.placeholder}>
                        <TextInput
                            placeholder = "Password"
                            activeUnderlineColor="#215A88"
                            secureTextEntry = {true}
                            onChangeText = {(password) => this.setState({ password })}/> 
                    </View> */}

          <View style={styles.placeholder}>
            {this.isFieldInError("password") &&
              this.getErrorsInField("password").map((errorMessage) => (
                <Text style={{ color: "red" }}>
                  Please enter your your password
                </Text>
              ))}
            {secureTextEntry == true ? (
              <TextInput
                label="Password"
                secureTextEntry={secureTextEntry}
                iconSize={25}
                iconColor={"#222222"}
                onChangeText={(password) => this.setState({ password })}
                value={password}
                activeUnderlineColor="#215A88"
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
                    
                    <View style={styles.placeholder}>
                        {this.isFieldInError("address") &&
                          this.getErrorsInField("address").map((errorMessage) => (
                            <Text style={{ color: "red" }}>
                              Please enter your Address
                            </Text>
                          ))}
                        <TextInput
                          label="Address"
                          activeUnderlineColor="#215A88"
                          onChangeText={(address) => this.setState({ address })}
                        />
                    </View>

                    <View style={styles.placeholder}>
                        {this.isFieldInError("language") &&
                          this.getErrorsInField("language").map((errorMessage) => (
                            <Text style={{ color: "red" }}>
                              Please enter your Spoken Language
                            </Text>
                          ))}
                        <TextInput
                          label="Spoken Language"
                          activeUnderlineColor="#215A88"
                          onChangeText={(language) => this.setState({ language })}
                        />
                    </View>
                </View> 
              <TouchableOpacity
                  style={[styles.button, { backgroundColor: "#1F465B" }]}
                  onPress={() => this.onSignUp()}>
                  <Text style={[styles.text]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={[styles.login, { alignItems: "center" }]}
              onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.alacc}>
                    Already have an account? <Text style={styles.textSignUp}>Login</Text>
                  </Text>
              </TouchableOpacity>
        </View>
    </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignContent: "center",
  },
  button: {
      alignSelf: "center",
      borderRadius: 20,
      padding: 13,
      margin: 20,
      width: "90%",   
      },
  fieldCont:{
    paddingTop: -0,
  },
  login:{
    alignSelf: "center",
    margin: 0, 
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
      borderRadius: 5,
      marginVertical: 5
      },
  image: {
      alignSelf: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      },
  logoContainer: {
      flex:1,
      alignItems: "center",
      top: 40,
      },
  regis: {
      fontSize: 22,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#1F465B",
      paddingVertical:0,
      margin: 5,
      },
  textSignUp: {
    fontSize: 14,
    color: "#1F465B",
    fontWeight: "bold",
    left: 250,
  },
  alacc: {
    margin: -10,
  },
  
  });