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
import { Audio } from 'expo-av';


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
        audio,
      },
    });  

    const chooseFile = async () => {
      let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
        copyToCacheDirectory: false,
      });
  
      console.log(result);
      if (result.type === "success") {
        setAudio(result);
      } else {
        alert("something went wrong!!");
      }
    };
  
    const uploadAudio = async () => {
      validate({
        
        audio: { required: false },
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
  
      const taskProgress = (snapshot) => {
        setLoading((snapshot.bytesTransferred / audio?.size) * 100);
        console.log(`transferred: ${snapshot.bytesTransferred}`);
      };
  
      const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot) => {
          SavePostData(snapshot);
          setLoading(null);
          console.log(snapshot);
        });
      };
  
      const taskError = (snapshot) => {
        setLoading(null);
        alert(snapshot);
        console.log(snapshot);
      };
  
      task.on("state_changed", taskProgress, taskError, taskCompleted);
    };

    const SavePostData = (downloadURL) => {
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
          downloadURL,
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
          navigation.goB();
        });
    };

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
                  multiline={true}
                  style={[
                    styles.addButton,
                    { paddingHorizontal: 5, flexDirection: "row" },
                  ]}
                  activeUnderlineColor="#215A88"
                  placeholder={newLanguage}
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}
                  value={newLanguage} />
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
       
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Hulagway(Imahe)</Text>
          <Text style={styles.guidelines}>
            Pwede nimo butangan ug hulagway(imahe).
          </Text>
        </View>

          <View style={styles.horiz}>
              <TouchableOpacity onPress={()=>{uploadAudio()}}
                  style={[styles.buttonVocab,{
                     backgroundColor: "#215A88",}]}>
                  <Text style={{
                     color:"#ffffff",
                     alignSelf:'center',
                     fontSize: 18}}>{loading ? `Sharing...  ${parseInt(loading)}%` : "Itigom"}</Text>
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
    position: 'absolute',
    marginTop: -15 
  },
  addButton:{
    borderColor: "#70707033",
      borderWidth: 1.5,
      marginVertical: 10,
      borderRadius: 7,
  }
});