import React, { useState } from "react";
import {
  View,
  StatusBar,
  Button,
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
  const [ newLanguage, setNewLanguage ] = useState("");
  const [wordID, setWordID] = useState(makeid());

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
        newLanguage
      },
    });


  const uploadLanguage = async () => {
      validate({
        bisaya: { required: true },
        newLanguage: { required: true },
        
      });
      
  
      const taskCompleted = () => {
          SavePostData(snapshot);
          saveAllPostData(snapshot);
          setLoading(null);
          console.log(snapshot);
      };
  
      const taskError = (snapshot) => {
        setLoading(null);
        alert(snapshot);
        console.log(snapshot);
      };
  
    };

    const SavePostData = () => {
      firebase
        .firestore()
        .collection("userAllTranslateAnswers")
        .doc(firebase.auth().currentUser.uid)
        .collection("userTranslateAnswers")
        .doc(wordID)
        .set({
          wordId: wordID,
          email: currentUser.email,
          language:currentUser.language,
          
          bisaya: data?.bisaya,
          newLanguage,
          status: "0",
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Thanks for contribution!!");
          setLoading(null);
          navigation.popToTop();
        });
        
    };
    const saveAllPostData = () => {
      firebase
        .firestore()
        .collection("words")
        .add({
          uid: firebase.auth().currentUser.uid,
          wordId: wordID,
          email: currentUser.email,
          username: currentUser.name,
          language:currentUser.language,
          bisaya:data?.bisaya,
          newLanguage,
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Thanks for contribution!!");
          setLoading(null);
          navigation.popToTop();
        });
    };

    const onUpdate = () =>{
      firebase
          .firestore()
          .collection("words")
          .doc('status')
          .update({
            status:"0",
          })
          
    }
  
  
   {
    return (
      <ScrollView style={styles.container}>
          <View>
          <View style={styles.center}>
            <Text style={{fontSize:18}}>I-translate kini sa {currentUser.language}</Text>
            <Text style={styles.text}>{data?.bisaya} </Text>
          </View>
          <View style={styles.horiz}>
              <TextInput
                  multiline={false}
                  activeUnderlineColor="#215A88"
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}
              />
            
          </View>
          <View style={styles.horiz}>
              <TouchableOpacity onPress={()=>{SavePostData()}}
                  style={[styles.buttonVocab,{
                     backgroundColor: "#215A88",}]}>
                  <Text style={{
                     color:"#ffffff",
                     alignSelf:'center',
                     fontSize: 18}}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonVocab,{
                     backgroundColor: "#e7e7e7",}]}>
                  <Text style={{
                     color:"#215A88",
                     alignSelf:'center',
                     fontWeight:'700',
                     fontSize: 18}}>Iris</Text>
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
    paddingVertical:50,
    paddingHorizontal:20,
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
    fontSize:22,
    textAlign:'center'
  }, 
});