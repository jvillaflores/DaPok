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
  Image
} from "react-native";

import {
  TextInput
} from 'react-native-paper'
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useValidation } from "react-native-form-validator";
import * as FileSystem from "expo-file-system";




function AddWord({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};
  const [bisaya, setBisaya] = useState("");
  const [ newLanguage, setNewLanguage ] = useState("");
  const [wordID, setWordID] = useState(makeid());
  const dimensions = Dimensions.get("window");
  const [image, setImage] = useState(false);
  const imageWidth = dimensions.width;

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
        .collection("userAllChatbotAnswers")
        .doc(firebase.auth().currentUser.uid)
        .collection("userChatbotAnswers")
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
            <Text style={{fontSize:15}}>Itubag kini nga panguatana sa {data?.language}</Text>
            <Text style={[styles.text,{justifyContent:'center',alignContent:'center'}]}>{data?.bisaya} </Text>
          </View>
          <View style={[styles.horiz,{textAlign:'center',}]}>
              {/* <TextInput
                  multiline={false}
                  activeUnderlineColor="#215A88"
                  placeholder={data?.newLanguage}
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}
              /> */}
              <Text style={{fontSize:30,  fontWeight:'bold',textAlign:'center'}}>
              {data?.newLanguage}
              </Text>
          </View>
          <View>
          <Image
            style={[styles.picture, { width: 250, height: 150}]}
            source={{ uri: data?.downloadURL }}
            />
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

export default connect(mapStateToProps, null)(AddWord);
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:70, 
  },
  center:{
    alignItems:"center",
  },
  horiz: {
    paddingHorizontal: 30,
    paddingVertical:20,
    marginTop:10,
    marginBottom:-15,
    
  },
  buttonVocab: {
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",  
    paddingHorizontal:20,
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
    justifyContent:'center',
    alignItems:'center'
  }, 
  picture:{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    marginLeft: 85
  }, 
});
