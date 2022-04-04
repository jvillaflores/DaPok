import React, { Component, useState } from 'react'
import { 
  View,
  Text,  
  Button,   
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
}
from 'react-native'


import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

import {Picker} from '@react-native-picker/picker';
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
          setStatus:"",
          secureTextEntry: true,
        };
        this.onSignUp = this.onSignUp.bind(this);
      }
    
      onSignUp() {
        const { email, password, name, address, username, language, setStatus } = this.state;

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
            setStatus,
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

    const {classification} = this.state;

    

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={{alignSelf:'center' }}>
                  <Image source={logo} style={{ width: 230, height: 65, }} />
            </View>
            <View style={{alignSelf:'center' }}>
                  <Text style={styles.regis}>Register</Text>
            </View>

            <View>

                <View style={{flex: 1, justifyContent: "center" }}>
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
                        <Picker
                          style={[styles.pickerStyle, {backgroundColor:'#e7e7e7', borderBottomColor:'#d0d0d0'}]}
                          onValueChange={(language) => this.setState({ language })}>
                          <Picker.Item label="Choose your Spoken Language" />
                          <Picker.Item label="Kagan" value="Kagan" />
                          <Picker.Item label="Mansaka" value="Mansaka" />
                          <Picker.Item label="Manobo" value="Manobo" />
                        </Picker>
                    </View>

                    {/* <View style={styles.placeholder}>
                        <Picker
                          style={[styles.pickerStyle, {backgroundColor:'#e7e7e7', border: '0px'}]}
                          onValueChange={(setStatus) => this.setState({ setStatus })}>
                          <Picker.Item label="Choose a Set" />
                          <Picker.Item label="Set A" value="1" />
                          <Picker.Item label="Set B" value="2" />
                          <Picker.Item label="Set C" value="3" />
                          <Picker.Item label="Set D" value="4" />
                          <Picker.Item label="Set E" value="5" />
                          <Picker.Item label="Set F" value="6" />
                          <Picker.Item label="Set G" value="7" />
                          <Picker.Item label="Set H" value="8" />
                          <Picker.Item label="Set I" value="9" />
                          <Picker.Item label="Set J" value="10" />
                        </Picker>
                      </View> */}
                    
                    

                </View>

                {/* BUTTONS */}
                
                <View>
                    <TouchableOpacity
                      style={[styles.button, { backgroundColor: "#1F465B" }]}
                      onPress={() => this.onSignUp()}>
                      <Text style={[styles.text]}>Register</Text>
                    </TouchableOpacity> 
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.login, { alignItems: "center" }]}
                        onPress={() => navigation.navigate("Login")}>
                        <Text>
                          Already have an account? <Text style={styles.textSignUp}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
                       
          
                      
      </ScrollView>
    </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignContent: "center",
  },
  scrollView: {
    //paddingTop:20,  
    marginHorizontal: 40,
    marginVertical: 20,
  },
  button: {
      alignSelf: "center",
      borderRadius: 20,
      padding: 13,
      marginTop: 20,
      width: "90%",   
      },
  fieldCont:{
    paddingTop: -0,
  },
  login:{
    alignSelf: "center",
    marginVertical: 10, 
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
      color: "#1F465B",
      margin: 5,
      },
  textSignUp: {
    fontSize: 14,
    color: "#1F465B",
    fontWeight: "bold",
    left: 250,
  },
  pickerStyle:{  
    height: 60,  
    width: "100%",  
    color: '#344953',
    padding:10,
    justifyContent: 'center',  
    borderTopWidth:0,
    borderBottomWidth:2,
    borderLeftWidth:0,
    borderRightWidth:0,
} 
  });