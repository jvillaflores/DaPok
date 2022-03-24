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
  import { connect } from "react-redux";

  import { connect } from "react-redux";
  import firebase from "firebase/app";
  require("firebase/auth");
  import {List} from 'react-native-paper';

  function Contribute ({currentUser, navigation}){
    if (currentUser.status == "1"){
      return (
    <ScrollView style={styles.container}>
    <List.Section>
        <List.Subheader style={styles.text}>Chatbot</List.Subheader>
      <View >
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CKagan")}
          style = {{margin: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CMansaka")}
          style = {{margin: -15, top: 5}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CManobo")}
          style = {{margin: -15, top: 10}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      </View>
      <List.Subheader style={styles.text1}>Translate</List.Subheader>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TKagan")}
          style = {{margin: -15, top: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />} />
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TMansaka")}
          style = {{margin: -15, top: -10}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TManobo")}
          style = {{margin: -15, top: -5}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
    </List.Section>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate("Validate")}>
            <View style={[styles.Bbuttonn, { backgroundColor: "#e7e7e7" }]}
            onPress={() => onUpdate()}>
            <Text style={[styles.text11]}>Report Generator</Text>
            </View>
          </TouchableOpacity>
          </View> 
    </ScrollView>
      );
 }else{
   return(
    <ScrollView style={styles.container}>
    <List.Section>
        <List.Subheader style={styles.text}>Chatbot</List.Subheader>
      <View >
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CKagan")}
          style = {{margin: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CMansaka")}
          style = {{margin: -15, top: 5}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CManobo")}
          style = {{margin: -15, top: 10}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      </View>
      <List.Subheader style={styles.text1}>Translate</List.Subheader>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TKagan")}
          style = {{margin: -15, top: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />} />
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TMansaka")}
          style = {{margin: -15, top: -10}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TManobo")}
          style = {{margin: -15, top: -5}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
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