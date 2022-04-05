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
  Platform,
  Image

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
import * as ImagePicker from 'expo-image-picker';


function AddWord({ currentUser, route, navigation,ImagePickerExample }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};

  const [bisaya, setBisaya] = useState("");
  const [ newLanguage, setNewLanguage ] = useState("");
  const [wordID, setWordID] = useState(makeid());
  const [datalist, setDatalist] = useState("");
  const [audio, setAudio] = useState(null); 

 


  try {
    if (firebaseConfig.apiKey) {
      firebase.initializeApp(firebaseConfig);
    }
  } catch (err) {
    // ignore app already initialized error on snack
  }
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
      
  
      if (!result.cancelled) {
        setImage(result.uri);
        // this.uploadImage(result.uri,"test-image");
        
      }
    };
  var uploadImage = async (uri,imageName) => {
    this.uploadImage(result.uri,"test-image");
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("images/"+imageName);
  }
//image
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
          audio,
          status: "0",
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Daghang Salamat sa imohang kontribusyon!!");
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
          language:datalist.language,
          bisaya:data?.bisaya,
          newLanguage,
          audio,
          image,
          upload: "1",
          creation: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Daghang Salamat sa imohang kontribusyon!!");
          setLoading(null);
          navigation.popToTop();
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
                  multiline={false}
                  activeUnderlineColor="#215A88"
                  onChangeText={(newLanguage) => setNewLanguage(newLanguage)}/>
          </View>
          
          {/* <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Audio </Text>
          <Text style={styles.guidelines}>
            Upload an audio on how to pronounce the Kinagan word you have
            suggested.
          </Text>
          {isFieldInError("audio") &&
            getErrorsInField("aduio").map((errorMessage) => (
              <Text>Please select an audio file</Text>
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
        </View> */}
       
        <View style={styles.paddingLeft}>
          <Text style={styles.title_text}>Hulagway(Imahe)</Text>
          <Text style={styles.guidelines}>
            Pwede nimo butangan ug hulagway kung unsa ang iyahang nawong.
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
            style={styles.imageButton}
            onPress={pickImage}
            title="Pick an image from camera roll">
              <MaterialCommunityIcons
                  style={styles.addImage}
                  name="plus-box"
                  color={"#707070"}
                  size={26}
                />
          </TouchableOpacity>
      {/* <Button style={styles.audioButton} title="Pick an image from camera roll" onPress={pickImage} /> */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
    </View>
          <View style={styles.horiz}>


          
              <TouchableOpacity onPress={()=>{SavePostData(), uploadAudio}}
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
  imageButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
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
  addImage:{
    flex: 1,
    position: 'absolute',
    marginTop: -15 
  }
});