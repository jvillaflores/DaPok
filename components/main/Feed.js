import React, { useCallback, useRef } from "react";

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

// import { GestureHandlerRootView } from "react-native-gesture-handler";

import { TextInput, Modal, Portal, Provider } from 'react-native-paper';

import { connect } from "react-redux";

// import BottomSheet , {BottomSheetRefProps} from '../main/BottomSheet'

var logo = require("../../assets/dapok.png");
var chat = require("../../assets/chat.png");
var translate = require("../../assets/translate.png");

function Feed({ currentUser, navigation }) {

  // const ref = useRef(BottomSheetRefProps);
  // const onPress = useCallback(() => {
  //   const isActive = ref?.current?.isActive()
  //      if (isActive) {
  //       ref?.current?.scrollTo(0)

  //      }else {
  //       ref?.current?.scrollTo(-500)

  //      }  
  // }, []);
  return (
    <SafeAreaView style={[styles.container, { alignItems: 'center'}]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {/* Kumusta box" */}
      <View style={{alignSelf:'center' }}>
                  <Image source={logo} style={{ width: 178, height: 50, top: 55 }} />
            </View>
        
      <View style={[styles.headline_box, {top: 80, paddingVertical: 20}]}>
                  <View style={{padding:5}}>
                     <Text style={[styles.textHead,{}]}>Kamusta {currentUser.username}! </Text>
                     <Text style={styles.pagabi}>Pag-abiabi sa DaPok!</Text>
                     <Text>Ang DaPok ay isa ka aplikasyon nga kaya mu tigom 
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
                  onPress={() => navigation.navigate("Chatbot")}>
                  <View style={styles.contextButton}>
                    <View style={styles.text_Context}>
                      <Text style={styles.textVocab}>Chatbot</Text>
                      <Text style={styles.textVocabSub}>Diri maka amot ug translation para sa MinNa chatbot.</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* Grammar.js */}
                <TouchableOpacity
                  style={styles.buttonVocab1}
                  onPress={() => navigation.navigate("Translate")}>
                  <View style={styles.contextButton}>
                    <View style={styles.text_Context}>
                      <Text style={styles.textVocab}>Translation</Text>
                      <Text style={styles.textVocabSub}>
                        Diri maka amot ug translation para sa MinNa translation.
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                    <Image source={chat} style={[styles.chaticon,{width: 45, height: 45, top: -260}]} />
                    </View>
                <View>
                    <Image source={translate} style={[styles.transicon, {width: 45, height: 45, top: -280}]}/>
                    </View>
          </View>  
    </ScrollView>
    </SafeAreaView>

    // <GestureHandlerRootView style={{flex:1, }}>
    //     <View style={{marginTop: StatusBar.currentHeight, marginHorizontal:40}}>
    //           <View style={[styles.headline_box,]}>
    //               <View style={{padding:5}}>
    //                 <Text style={[styles.textHead,{}]}>Kumusta {currentUser.username}! </Text>
    //                 <Text>Pag-abiabi sa DaPok! Ang DaPok ay isa ka aplikasyon nga kaya mu tigom 
    //                   ug mga datos bahin sa mga pulong ug mga tudlong-pulong nga imonga kayang ma amot. </Text>
    //               </View>
    //           </View>

    //           <View>
    //             <Text style={styles.titleText}>Kontribusyon </Text>
    //           </View>
    //     </View>

    //     <View>
    //         <View style = {{marginHorizontal:40}}>
    //             <TouchableOpacity
    //                 style={styles.buttonVocab}
    //                 onPress={onPress}>
    //                       <View style={styles.contextButton}>
    //                         <View style={styles.text_Context}>
    //                         <Text style={styles.textVocab}>Chatbot</Text>
    //                           <Text style={styles.textVocabSub}>Diri maka amot ug translation para sa MinNa chatbot.</Text>
    //                         </View>
    //                       </View>
    //             </TouchableOpacity>
    //         </View>
    //               <BottomSheet ref={ref}>
    //                   <View style = {{flex:1, backgroundColor:'#f2f2f2'}}>
                      
    //                   </View>
    //               </BottomSheet>
    //     </View>

    //     <View>
    //         <View style = {{marginHorizontal:40}}>
    //           <TouchableOpacity
    //               style={styles.buttonVocab}
    //               onPress={onPress}>
    //                   <View style={styles.contextButton}>
    //                     <View style={styles.text_Context}>
    //                       <Text style={styles.textVocab}>Translation</Text>
    //                       <Text style={styles.textVocabSub}>
    //                       Diri maka amot ug translation.
    //                       </Text>
    //                     </View>
    //                   </View>
    //           </TouchableOpacity>
    //         </View>
    //           <BottomSheet ref={ref}>
    //               <View style = {{flex:1, backgroundColor:'#f2f2f2'}}>
                    
    //               </View>
    //           </BottomSheet>
    //     </View>
    // </GestureHandlerRootView>


  )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
  });


export default connect(mapStateToProps, null )(Feed);

const styles = StyleSheet.create({
  scrollView:{

  },
    container: {
      flex: 1,
      paddingHorizontal: 25,
      alignContent: "center",
      marginVertical:20,
    },  
  headline_box: {
      backgroundColor: "#EBEBEB",
      // alignItems: "center",
      borderRadius: 15,
      marginVertical:20,
      padding:15,
      alignSelf: "center",
      margin: 60,
      width: "90%", 
    },
  textHead: {
      flexDirection: "row",
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "#215A88",
      paddingVertical:10
    },
  pagabi:{
    paddingVertical:10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "black",
    alignSelf:'left',
    margin: 25,
    paddingVertical:60,
  },
  buttonVocab: {
    backgroundColor: "#215A88",
    borderRadius: 15,
    padding:15,
    alignSelf: "center",
    margin: -60,
    width: "90%",
    paddingVertical:-20,
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
    marginLeft: 55,
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
  },
  chaticon:{
    margin: 35,
  },
  transicon:{
    margin: 35,
  }

    // Bottombutton:{
    //   height:  50,
    //   borderRadius:25,
    //   opacity:0.6,
    //   aspectRatio: 1,
    //   backgroundColor: 'white',
    // },
    
    // header: {
      
    //   alignContent: "flex-start",
    //   alignSelf: "flex-start",
    //   marginLeft: 50,
    //   marginTop: 15,
    // },
    // contextButton: {
    //   //padding: 13,
    //   alignSelf: "center",
    //   borderRadius: 100,
    //   padding: 40,
    //   margin: -45,
    //   width: "100%",  
    // },
    // textSubHead: {
    //   flexDirection: "row",
    //   fontSize: 13,
    //   // fontWeight: "bold",
    //   lineHeight: 21,
    //   letterSpacing: 0.25,
    //   color: "grey",
    // },
    // headLine: {
    //   top: 15,
    //   left: 10,
    // },
    // textHeadline: {
    //   fontSize: 25,
    //   fontWeight: "bold",
    //   color: "black",
    //   padding: 15,
    //   marginBottom: -30,
    // },
    
    // grammar: {
    //   top: 70,
    //   left: 40,
    // },
    // pronun: {
    //   top: 100,
    //   left: 40,
    // },
    // button: {
    //   justifyContent: "center",
    //   padding: 10,
    //   paddingLeft: 20,
    //   paddingRight: 20,
    //   borderRadius: 10,
    //   margin: 10,
    //   backgroundColor: "#8E2835",
    // },
    // buttonGrammar: {
    //   alignSelf: "center",
    //   justifyContent: "center",
    //   paddingVertical: 12,
    //   paddingHorizontal: 32,
    //   borderRadius: 4,
    //   elevation: 3,
    //   width: "78%",
    //   backgroundColor: "#dadada",
    //   top: 60,
    //   left: -40,
    //   height: 60,
    //   borderTopLeftRadius: 7,
    //   borderTopRightRadius: 7,
    //   borderBottomRightRadius: 7,
    //   borderBottomLeftRadius: 7,
    //   borderColor: "black",
    // },
    // buttonPronun: {
    //   alignSelf: "center",
    //   justifyContent: "center",
    //   paddingVertical: 12,
    //   paddingHorizontal: 32,
    //   borderRadius: 4,
    //   elevation: 3,
    //   width: "78%",
    //   backgroundColor: "#dadada",
    //   top: 60,
    //   left: -40,
    //   height: 60,
    //   borderTopLeftRadius: 7,
    //   borderTopRightRadius: 7,
    //   borderBottomRightRadius: 7,
    //   borderBottomLeftRadius: 7,
    //   borderColor: "black",
    // },
    // text: {
    //   fontSize: 15,
    //   fontWeight: "bold",
    //   lineHeight: 21,
    //   letterSpacing: 0.25,
    //   color: "white",
    // },
  });
