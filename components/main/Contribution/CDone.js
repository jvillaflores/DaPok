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
  Image,
  SafeAreaView
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
import { FlatList } from "react-native-gesture-handler";
import { Audio } from "expo-av";

function AddWord({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};
  const [bisaya, setBisaya] = useState("");
  const [ newLanguage, setNewLanguage ] = useState("");
  const [wordID, setWordID] = useState(makeid());
  const dimensions = Dimensions.get("window");
  const [datalist, setDatalist] = useState("");
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

    const downloadAudio = async () => {
      let SoundObject = new Audio.Sound();
      try {
        await SoundObject.loadAsync({ uri: data.downloadURL });
        const status = await SoundObject.playAsync();
        setTimeout(() => {
          SoundObject.unloadAsync();
        }, status.playableDurationMillis + 1000);
      } catch (error) {
        console.log(error);
        await SoundObject.unloadAsync(); // Unload any sound loaded
        SoundObject.setOnPlaybackStatusUpdate(null); // Unset all playback status loaded
        retryPlaySound();
      }
    };
  
    const retryPlaySound = () => downloadAudio();

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
          // audio: downloadURL,
          // image: downloadURL,
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
    useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("userAllChatbotAnswers")
        .doc(firebase.auth().currentUser.uid)
        .collection("userChatbotAnswers")
        .where("status", "==", "0")
        .get()
        .then((snapshot) => {
          let words = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          setDatalist(words);
        });
    })

    return unsubscribe;
  }, [navigation]);
   {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
                <View style = {styles.center} >
                    <Text style={{fontSize:15}}>Itubag kini nga pangutana sa {data?.language}</Text>
                    <Text style={[styles.text,{textAlign:'center'}]}>{data?.bisaya} </Text>
                    <Text style={{fontSize:20,  fontWeight:'bold',textAlign:'center', marginTop:10}}>
                        {data?.newLanguage}
                    </Text>
                </View>
                <View style={[styles.center,{textAlign:'center', paddingVertical:15}]}>
                    <Image
                        style={{ width: 350, height: 250}}
                        source={{ uri: data?.image }}/>
                    <Text>(Halugway)</Text>
                </View>
                <View style={[styles.center,{flex:1}]}>
                    <TouchableOpacity
                      style={styles.audioButton}
                      onPress={() => downloadAudio()}>
                        <View>
                          <MaterialCommunityIcons
                            style={styles.addAudio}
                            name="volume-high"
                            color={"#707070"}
                            size={26}/>
                        </View>
                    </TouchableOpacity>
                        <Text>(Audio)</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal:20,
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
    fontSize:15,
    justifyContent:'center',
    alignItems:'center'
  }, 
  picture:{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    marginLeft: 10
  }, 
  paddingLeft: {
    alignContent: "flex-start",
    // padding:15,
    // paddingRight:5,
    marginTop: 20,
    paddingLeft: 20,
  },
  title_text: {
    //alignContent:"flex-start",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10
  },
  guidelines: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#707070",
  },
  audioButton: {
    alignItems: "center",
    //justifyContent: "center",
    width: "95%",
    margin: 5,
    height: 60,
    backgroundColor:"#e7e7e7"
  },
  addAudio: {
    flex: 1,
    marginTop:15,
  },
});
