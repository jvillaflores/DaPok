import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from "react-native";

import { Modal, Portal, Provider } from 'react-native-paper';
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { connect } from "react-redux";


function Feed({ currentUser, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {/* Kumusta box" */}
        <View style={styles.headline_box}>
          <View style={{padding:5}}>

            <Text style={[styles.textHead,{}]}>Kumusta {currentUser.username}! </Text>
            <Text>Pag-abiabi sa DaPok! Ang DaPok ay isa ka aplikasyon nga kaya mu tigom 
              ug mga datos bahin sa mga pulong ug mga tudlong-pulong nga imonga kayang ma amot. </Text>

          </View>
               
        </View>
          



          {/* Buttons */}
          <View>
            <Text style={styles.titleText}>Kontribusyon </Text>
          </View>
          
          <View>
            
                 {/* Chatbot.js */}
                <TouchableOpacity
                  style={styles.buttonVocab}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <View style={styles.contextButton}>
                    

                    <View style={styles.text_Context}>
                      <Text style={styles.textVocab}>Chatbot</Text>
                      <Text style={styles.textVocabSub}>Diri maka amot ug translation para sa MinNa chatbot.</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Grammar.js */}
                <TouchableOpacity
                  style={styles.buttonVocab}
                  onPress={() => navigation.navigate("Grammar")}
                >
                  <View style={styles.contextButton}>
                     <Image
                      style={{ width: 40, height: 40 }}
                      source={require("../../assets/grammar.png")}
                    /> 
                    <View style={styles.text_Context}>
                      <Text style={styles.textVocab}>Translation</Text>
                      <Text style={styles.textVocabSub}>
                        Diri maka amot ug translation.
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
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
      // paddingHorizontal: 40,
      //paddingVertical: 30,
      alignContent: "center",
    },
      scrollView: {
        
        marginHorizontal: 40,
        //paddingVertical: 30
      },
    containerbox: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    
    header: {
      
      alignContent: "flex-start",
      alignSelf: "flex-start",
      marginLeft: 50,
      marginTop: 15,
    },
    headline_box: {
      backgroundColor: "#EBEBEB",
      //alignItems: "center",
      borderRadius: 15,
      marginVertical:10,
      padding:15,
    },
    contextButton: {
      //padding: 13,
      flexDirection: "row",
      paddingHorizontal:35,
      alignItems: "center",
    },
    text_Context: {
      flexDirection: "column",
      marginLeft: 20,
      alignItems: "flex-start",
    },
    textHead: {
      flexDirection: "row",
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "black",
      paddingVertical:15
    },
    textSubHead: {
      flexDirection: "row",
      fontSize: 13,
      // fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "grey",
    },
    headLine: {
      top: 15,
      left: 10,
    },
    textHeadline: {
      fontSize: 25,
      fontWeight: "bold",
      color: "black",
      padding: 15,
      marginBottom: -30,
    },
    
    grammar: {
      top: 70,
      left: 40,
    },
    pronun: {
      top: 100,
      left: 40,
    },
    titleText: {
      flexDirection: "row",
      fontSize: 20,
      fontWeight: "bold",
      //lineHeight: 21,
      letterSpacing: 0.5,
      color: "black",
      alignSelf:'center'
    },
    button: {
      justifyContent: "center",
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 10,
      margin: 10,
      backgroundColor: "#8E2835",
    },
    buttonVocab: {
      width:"100%",
      elevation: 0.7,
      backgroundColor: "#215A88",
      borderRadius: 10,
      paddingVertical:15,
      marginVertical:5
    },
    buttonGrammar: {
      alignSelf: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: "78%",
      backgroundColor: "#dadada",
      top: 60,
      left: -40,
      height: 60,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderColor: "black",
    },
    buttonPronun: {
      alignSelf: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: "78%",
      backgroundColor: "#dadada",
      top: 60,
      left: -40,
      height: 60,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderColor: "black",
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
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "white",
    },
  });
