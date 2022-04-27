import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,

} from "react-native";

import {
  TextInput
} from 'react-native-paper'
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useValidation } from "react-native-form-validator";
import * as FileSystem from "expo-file-system";



function TransAdd({ currentUser, route, navigation }) {
  

  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};

  const [bisaya, setBisaya] = useState("");
  const [ newLanguage, setNewLanguage ] = useState(null);
  
  const [wordID, setWordID] = useState(makeid());

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

function makeid() {
    var randomText = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
      randomText += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );

    return randomText;
  }

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: {
        bisaya,
        newLanguage,
      },
    });


  const uploadLanguage = async () => {
      validate({
        bisaya,
        newLanguage: { required: true },
        
      });

      if(newLanguage == null){
        alert("Walay sulod ang sagutan.")
        console.log(data?.id)

      }
      
      else{
        SaveAllData();
        SavePostData();
      }

     
      
    };

    const SaveAllData = () => {
      firebase
        .firestore()
        .collection("userAllTranslateAnswers")
        .doc(firebase.auth().currentUser.uid)
        .collection("userTranslateAnswers")
        .doc(wordID)
        .set({
          wordId: data?.id,
          email: currentUser.email,
          language:datalist.language,
          bisaya: data?.bisaya,
          newLanguage,
          status: "0",
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Salamat sa imong kontribusyon!");
          setLoading(null);
          navigation.goBack();
        });
        
    };

    const SavePostData = () => {
      firebase
        .firestore()
        .collection("userAllTranslations")
        .doc(firebase.auth().currentUser.uid)
        .collection("userTranslateAnswers")
        .doc(data?.id) //bisaya word from translate collection ID
        .set({
          wordId: data?.id,
          bisaya: data?.bisaya,
          language:datalist.language,
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          //alert("Salamat sa imong kontribusyon");
          setLoading(null);
          //navigation.goBack();
        });
        
    };
    const updateTranslation = () => {
      firebase
        .firestore()
        .collection("userAllTranslations")
        .doc(firebase.auth().currentUser.uid)
        .collection("userTranslateAnswers")
        .doc(wordID)
        .update({
          
          bisaya: data?.bisaya,
          upload: "1",
        })
        .then(function () {
          //alert("Salamat sa imong kontribusyon");
          setLoading(null);
          //navigation.goBack();
        });
    };

    
    const exit =() => {
      navigation.goBack();
    }
  
  
   {
    return (
      <ScrollView style={styles.container}>
          <View>
          <View style={styles.center}>
            <Text style={{fontSize:18}}>I-translate kini sa {datalist.language}</Text>
            <Text style={styles.text}>{data?.bisaya} </Text>
          </View>
          <View style={styles.horiz}>
              <TextInput
                  multiline={false}
                  activeUnderlineColor="#215A88"
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}/>
          <View> 
            {/* this is for audio */}

            
            
            </View>  
          </View>
          <View style={styles.horiz}>
              <TouchableOpacity 
                  onPress={()=> uploadLanguage()}
                  style={[styles.buttonVocab,{
                     backgroundColor: "#215A88",}]}>
                  <Text style={{
                     color:"#ffffff",
                     alignSelf:'center',
                     fontSize: 18}}>itigom</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                    style={[
                      styles.buttonVocab,
                      {
                        backgroundColor: "#e7e7e7",
                      },
                     ]}
                     onPress={() => {
                      exit();
                    }}
                     >
                  <Text style={{
                     color:"#215A88",
                     alignSelf:'center',
                     fontWeight:'700',
                     fontSize: 18}}>kanselahon</Text>
              </TouchableOpacity>
          </View>
        </View> 
      </ScrollView>
    );
  } 
}

const mapStateToProps = (store) => ({
  words: store.userState.words,
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(TransAdd);
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:70,
    paddingHorizontal:10,
  },
  center:{
     alignItems:'center'
  },
  horiz: {
    paddingHorizontal: 40,
    paddingVertical:20,
  },
  buttonVocab: {
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 20,
    marginTop: 20,
    width: "100%",  
    paddingHorizontal:20,
  },
  text:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  }, 
});
