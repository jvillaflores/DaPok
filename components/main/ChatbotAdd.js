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
  Image,
  SafeAreaView,
} from "react-native";

import { TextInput } from "react-native-paper";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useValidation } from "react-native-form-validator";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";

function AddWord({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(null);
  const { data } = route?.params ?? {};
  const [audio, setAudio] = useState(null);
  const [bisaya, setBisaya] = useState("");
  const [newLanguage, setNewLanguage] = useState(null);
  const [wordID, setWordID] = useState(makeid());
  const [datalist, setDatalist] = useState("");
  
 
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { newLanguage },
    });
  const onSubmit = () => {
    validate({
      bisaya,
      newLanguage:  { required: true },
    });
    
    if (newLanguage != null) {
      
      if (audio != null) {
        uploadAudio();  
        wordsContributed();    
      } else {
        saveTextPostData();
        wordsContributed();
      }
    } else if (audio != null) {
      alert("Butangi ug tubag.");
      
    }else {
      alert("Butangi ug tubag.");
      console.log(data?.id)
    }
  };

const chooseFile = async () => {
  let result = await DocumentPicker.getDocumentAsync({
    type: "audio/*",
    copyToCacheDirectory: false,
  });

   console.log(result);

  if (result.type === "success") {
      setAudio(result);
      console.log(result);
    }else {
        alert("something went wrong!!");
      }

};

const uploadAudio = async () => {
  
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
    console.log(snapshot );
  };

  task.on("state_changed", taskProgress, taskError, taskCompleted);
  
};

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

  const wordsContributed = () => {
    firebase
      .firestore()
      .collection("wordsDone")
      .doc(firebase.auth().currentUser.uid)
      .collection("usersWordsDone")
      .doc(data?.id)
      .set({
        wordID:data?.id,
        bisaya: data?.bisaya,
        language:datalist.language,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        setLoading(null);
       
      })
      
  };

  const SavePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("userAllChatbotAnswers")
      .doc(firebase.auth().currentUser.uid)
      .collection("userChatbotAnswers")
      .doc(wordID)
      .set({
        wordId: data?.id,
        
        email: currentUser.email,
        language: datalist.language,
        audio: downloadURL,
        bisaya: data?.bisaya,
        newLanguage,
        status: "0",
        upload: "1",
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        setLoading(null);
        navigation.navigate("AddImage",{wordID:wordID})
        
        console.log(audio?.name)
      })
  };
  const saveTextPostData = () => {
    firebase
      .firestore()
      .collection("userAllChatbotAnswers")
      .doc(firebase.auth().currentUser.uid)
      .collection("userChatbotAnswers")
      .doc(wordID)
      .set({
        wordId: data?.id,
        email: currentUser.email,
        language: datalist.language,
        bisaya: data?.bisaya,
        newLanguage,
        status: "0",
        upload: "1",
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        setLoading(null);
        navigation.navigate("AddImage",{wordID:wordID})
      });
  };
  const exit =() => {
    navigation.goBack();
  }
  {
    return (
      <SafeAreaView  style={styles.container}>
      <ScrollView>
          <View style = {{paddingHorizontal:40, paddingVertical:40}}>

              <View style={styles.center}>
                  <Text style={{ fontSize: 18 }}>
                    Itubag kini nga panguatana sa {datalist.language}
                  </Text>
                  <Text style={styles.text}>{data?.bisaya} </Text>
              </View>
              <View style={{marginTop:20}}>
                  <TextInput
                     multiline={true}
                     style={[
                       styles.addButton,
                       { paddingHorizontal: 5, flexDirection: "row" },
                     ]}
                     activeUnderlineColor="#215A88"
                     placeholder={newLanguage}
                     onChangeText={(newLanguage) => setNewLanguage(newLanguage)}
                     value={newLanguage}
                  />
              </View>
              <View
                style={{ flex: 1, justifyContent: "center" }}>
              
                <Text style={styles.guidelines}>Pwede nimo butangan ug audio.</Text>
                  <TouchableOpacity
                        style={styles.imageButton}
                        onPress={() => chooseFile()}>
                          <View>  
                              {audio ? (
                              <TextInput>{audio?.name}</TextInput>
                            ) : (
                            <MaterialCommunityIcons
                                style={styles.addAudio}
                                name="volume-plus"
                                color={"#707070"}
                                size={26}/>
                            )}
                          </View>
                </TouchableOpacity>

          </View>
                <View style={styles.horiz}>
                     <TouchableOpacity onPress={() => {onSubmit(); }}
                         style={[ styles.buttonVocab, { backgroundColor: "#215A88",},]}>
                          <Text
                            style={{
                              color: "#ffffff",
                              alignSelf: "center",
                              fontSize: 18,
                            }}
                          >{loading ? `nagapadayon...  ${parseInt(loading)}%` : "magpadayon"}</Text>
                          
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
                        <Text
                          style={{
                            color: "#215A88",
                            alignSelf: "center",
                            fontWeight: "700",
                            fontSize: 18,
                          }}
                        >kanselahon</Text>
                      </TouchableOpacity>
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
    flex: 1,
    marginTop:20,
  },
  center: {
    alignItems: "center",
  },
  horiz: {
    paddingVertical: 20,
  },
  buttonVocab: {
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 20,
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
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
  imageButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 5,
    height: 60,
    backgroundColor:"#e7e7e7"
  },
  paddingLeft: {
    alignContent: "flex-start",
    paddingLeft: 20,
    fontWeight: "bold", 
    fontSize: 17,
  },
  guidelines: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#707070",
    marginTop:20,
    paddingHorizontal:5,
    textAlign:'justify'
  },
  addImage: {
    flex: 1,
    position: "absolute",
  },
  addAudio: {
    flex: 1,
    marginTop:15,
  },
  addButton:{
      borderColor: "#70707033",
      borderWidth: 1.5,
      marginVertical: 10,
      borderRadius: 7,
  }
});
