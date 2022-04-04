import React, { useState, useEffect } from "react";
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
import * as DocumentPicker from "expo-document-picker";



function AddWord({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};

  const [bisaya, setBisaya] = useState("");
  const [ newLanguage, setNewLanguage ] = useState("");
  const [wordID, setWordID] = useState(makeid());
  const [datalist, setDatalist] = useState("");
  const [audio, setAudio] = useState(null);

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
        audio
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
          language:datalist.language,
          
          bisaya: data?.bisaya,
          newLanguage,
          status: "0",
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Daghang Salamat sa imohang kontribusyon!!");
          setLoading(null);
          navigation.goBack();
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
          language:datalist.language,
          bisaya:data?.bisaya,
          newLanguage,
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Daghang Salamat sa imohang kontribusyon!!");
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
    const chooseFile = async () => {
      let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        copyToCacheDirectory: false,
      });
      // Alert.alert("Audio File", result.name);
  
      console.log(result);
      if (result.type === "success") {
        setAudio(result);
      } else {
        alert("something went wrong!!");
      }
    };
  
    const uploadAudios = async () => {
      // const uri = recording.getURI();
      const uri = FileSystem.documentDirectory + audio.name;
  
      await FileSystem.copyAsync({
        from: audio.uri,
        to: uri,
      });
      try {
        let res = await fetch(uri);
        let blobs = await res.blob();
        if (blobs != null) {
          const uriParts = audio?.uri.split(".");
          const fileType = uriParts[uriParts.length - 1];
          console.log(uriParts, "0-0-0", fileType);
        } else {
          console.log("erroor with blob");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    const uploadAudio = async () => {
      validate({
        audio: { required: true },
      });
      const childPath = `audio/${
        firebase.auth().currentUser.uid
      }/${Math.random().toString(36)}`;
      console.log(childPath);
      const uri = FileSystem.documentDirectory + audio.name;
  
      await FileSystem.copyAsync({
        from: audio.uri,
        to: uri,
      });
  
      let res = await fetch(uri);
      let blob = await res.blob();
  
      const task = firebase.storage().ref().child(childPath).put(blob);
    }
   {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.center}>
            <Text style={{fontSize:18}}>Itubag kini nga panguatana sa {datalist.language}</Text>
            <Text style={styles.text}>{data?.bisaya} </Text>
          </View>
          <View style={styles.horiz}>
              <TextInput
                  multiline={false}
                  activeUnderlineColor="#215A88"
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}/>
          </View>
          
          <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Audio </Text>
          <Text style={styles.guidelines}>
            Pwede nimo butangan ug audio kung unsaon pag sulti ani na sentensiya.
          </Text>
          {isFieldInError("audio") &&
            getErrorsInField("aduio").map((errorMessage) => (
              <Text></Text>
            ))}
          <TouchableOpacity
            style={styles.audioButton}
            onPress={() => chooseFile()}>
            <View>
              {audio ? (
                <TextInput>{audio?.name}</TextInput>
              ) : (
                <MaterialCommunityIcons
                  style={styles.addAudio} 
                  name="plus-box"
                  color={"#707070"}
                  size={26}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        {/* <Pressable style={styles.button} onPress={() => uploadAudio()}></Pressable> */}
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Hulagway(Imahe)</Text>
          <Text style={styles.guidelines}>
            Pwede nimo butangan ug hulagway(imahe).
          </Text>
          </View>
          <View style={styles.horiz}>
{/*           
          <Pressable style={styles.buttonVocab} onPress={() => uploadAudio()}>
            <Text style={{
                     color:"#ffffff",
                     alignSelf:'center',
                     fontSize: 18}}>
              {loading ? `Sharing...  ${parseInt(loading)}%` : "Itigom"}
            </Text>
          </Pressable> */}
          
              <TouchableOpacity onPress={()=>{SavePostData(),uploadAudio()}}
                  style={[styles.buttonVocab,{
                     backgroundColor: "#215A88",}]}>
                  <Text style={{
                     color:"#ffffff",
                     alignSelf:'center',
                     fontSize: 18}}>itigom</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonVocab,{
                     backgroundColor: "#e7e7e7",}]}>
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

export default connect(mapStateToProps, null)(AddWord);
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:70,
    paddingHorizontal:10,

  },
  center:{
    alignItems:"center",
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
    justifyContent:'center'
  }, 
  title_text: {
    //alignContent:"flex-start",
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 1,
    width: "90%",
    backgroundColor: "#8E2835",
    //top: 130,
    marginTop: 20,
    marginBottom: 80,
  },
  audioButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#707070",
    paddingTop: 20,
    marginTop: 10,
  },
  paddingLeft: {
    alignContent: "flex-start",
    // padding:15,
    // paddingRight:5,
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
  guidelines: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#707070",
  },
  addAudio:{
    flex: 1,
    position: 'center',
    marginTop: -15 
  }
});