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
  from 'react-native';
  
  import { connect } from "react-redux";
  import firebase from "firebase/app";
  require("firebase/auth");
  import {List} from 'react-native-paper';

  function Contribute ({currentUser, navigation}){
    if (currentUser.status == "1"){
      return (
    <ScrollView style={styles.container}>
    <List.Section>
    </List.Section>
    {/* <View>
        <TouchableOpacity onPress={() => navigation.navigate("reportGenerate")}>
            <View style={[styles.Bbuttonn, { backgroundColor: "#e7e7e7" }]}
            onPress={() => onUpdate()}>
            <Text style={[styles.text11]}>Report Generator</Text>
            </View>
          </TouchableOpacity>
          </View>  */}
      <List.Section>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("ChatbotFolder")}
          style = {{margin: -10, top: -5}} title="Chatbot" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TranslationFolder")}
          style = {{margin: -10, top: 5}} title="Translation" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      </List.Section>
    </ScrollView>
      );
 }else{
   return(
    <ScrollView style={styles.container}>
    <List.Section>
    </List.Section>
    </ScrollView>
   )
 }
  }
  const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
  });
  
  export default connect(mapStateToProps, null)(Contribute);
  

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 25,
      },
      text:{
        fontSize: 15,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#1F465B",
        paddingVertical:30,
        margin: -10,
      },
      text1:{
        fontSize: 15,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#1F465B",
        paddingVertical:50,
        margin: -10,
      },
      Bbuttonn: {
        alignSelf: "center",
        borderRadius: 5,
        padding: 13,
        marginTop: 15,
        width: "100%",
      },
      text11: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "normal",
        lineHeight: 21,
        letterSpacing: 0.25,
        color: "black",
      },
    });