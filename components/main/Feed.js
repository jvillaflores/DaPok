import React, { useCallback,useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from "react-native";

import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import { TextInput, Modal, Portal, Provider } from 'react-native-paper';

import { connect } from "react-redux";


var logo = require("../../assets/dapok.png");
var chat = require("../../assets/chat.png");
var translate = require("../../assets/translate.png");

function Feed({ currentUser, navigation }) {
  const [datalist, setDatalist] = useState("");

  useEffect(() => {
    setDatalist(currentUser);
  }, [currentUser]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          console.log(snapshot, "-=-=-=-=-=-=-=-=");
          if (snapshot.exists) {
            let currentUser = snapshot.data();
            setDatalist(currentUser);
          } else {
          }
        });
    });

    return unsubscribe;
  }, [navigation]);
  
   return (
    <SafeAreaView style={[styles.container, ]}>
        <ScrollView 
            style={{paddingVertical: 40,}} 
            showsVerticalScrollIndicator={false}
            >
          <View>
            <View style={{alignSelf:'center' }}>
                  <Image source={logo} style={{ width: 178, height: 50,}} />
            </View>
            {/* //////// */}
            <View style={[styles.headline_box,]}>
                  <View >
                      <Text style={[styles.textHead,{}]}>Kamusta {datalist.username}! </Text>
                      <Text style={{textAlign:'justify'}}>Pag-abiabi sa DaPok! Ang DaPok ay isa ka aplikasyon nga kaya mu tigom 
                       ug mga datos bahin sa mga pulong ug mga tudlong-pulong nga imonga kayang ma amot. </Text>
                   </View>
            </View>
          
          {/* //////// */}
          
              <View style={{alignItems:'center', paddingHorizontal:20,}}>
                 <Text style={[styles.titleText ,{paddingVertical:10}]}>Kontribusyon </Text>
              </View>
          {/* //////// */}  
              <View style={{paddingHorizontal:25,}}>
                 <TouchableOpacity
                   style={styles.buttonVocab}
                   onPress={() => navigation.navigate("Chatbot")}>
                      <View style={styles.contextButton}>
                        <Image source={chat} style={[styles.chaticon,{width:45, height:45}]} />
                              <View style={styles.text_Context}>
                              
                                <Text style={styles.textVocab}>Chatbot</Text>
                                <Text style={styles.textVocabSub}>Diri maka amot ug translation para sa MinNa chatbot.</Text>
                          </View>
                      </View>
                  </TouchableOpacity>

                
                  <TouchableOpacity
                    style={styles.buttonVocab}
                    onPress={() => navigation.navigate("ScreenTranslate")}>
                      <View style={styles.contextButton}>
                         <Image source={translate} style={[styles.chaticon, {width: 45, height: 45,}]}/>
                            <View style={styles.text_Context}>
                              <Text style={styles.textVocab}>Translation</Text>
                              <Text style={styles.textVocabSub}>Diri maka amot ug translation para sa MinNa translation.
                              </Text>
                            </View>
                      </View>
                 </TouchableOpacity>
              </View>  
          </View>
          
        </ScrollView>
    </SafeAreaView>

  )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
  });


export default connect(mapStateToProps, null )(Feed);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      //alignContent: "center",
      //marginVertical:20,
    },
    headline_box: {
      backgroundColor: "#EBEBEB",
      // alignItems: "center",
      borderRadius: 15,
      marginVertical:40,
      paddingVertical:30,
      paddingHorizontal:25,
      alignSelf: "center",
      margin: 60,
      width: "90%", 
    },
    contextButton:{
        flexDirection:'row',
    },
    
    textHead: {
      flexDirection: "row",
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "#215A88",
      paddingBottom:10,
      
    },
  pagabi:{
    paddingVertical:10,
    },
    titleText: {
       fontSize: 20,
      // fontWeight: "bold",
    },
    buttonVocab: {
      alignSelf: "center",
      borderRadius: 20,
      paddingVertical: 20,
      marginTop: 20,
      width: "100%",  
      backgroundColor: "#215A88",
      paddingHorizontal:20,
    },
  buttonVocab1: {
    backgroundColor: "#215A88",
    borderRadius: 15,
    padding:15,
      alignSelf: "center",
    margin: 70,
    width: "90%",
    paddingVertical:-20,
    },
  text_Context: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
    textVocab: {
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.55,
      color: "white",
    },
    textVocabSub: {
      fontSize: 11,
      letterSpacing: 0.25,
      color: "white",
      marginRight:50,
    },
  chaticon:{
    marginRight:15,
  },
  
  });
