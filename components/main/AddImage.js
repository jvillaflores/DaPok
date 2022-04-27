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
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

function AddImage({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(null);
  const [bisaya, setBisaya] = useState("");
  const [datalist, setDatalist] = useState("");
  const [image, setImage] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const {wordID} = route?.params ??{};

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!image.cancelled) {
      setImage(image.uri);
      console.log(image.uri);
    }
  };
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
    });
  const onSubmit = () => {
    validate({
      bisaya,
      image:{ required: true },
    });
    
      if (image != null){
        uploadImage();
      }
      else {
        saveAllPostData();
      }
    
  };
  
  ///////////////////////////////
  const uploadImage = async () => {
    const uri = image;
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;
    console.log(childPath);
    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      setLoading((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
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
      console.log(snapshot);
      setLoading(null);
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

  const SavePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("userAllChatbotAnswers")
      .doc(firebase.auth().currentUser.uid)
      .collection("userChatbotAnswers")
      .doc(wordID)
      .update({
        
        image: downloadURL,
        
      })
      .then(function () {
        alert("Daghang Salamat sa imohang kontribusyon!!");
        setLoading(null);
        navigation.navigate('Chatbot');
      })
      
      
  };
  const saveAllPostData = () => {
    firebase
      .firestore()
      .collection("userAllChatbotAnswers")
      .doc(firebase.auth().currentUser.uid)
      .collection("userChatbotAnswers")
      .doc(wordID)
      .update({
        
      })
      .then(function () {
        alert("Daghang Salamat sa imohang kontribusyon!!");
        setLoading(null);
        navigation.navigate('Chatbot');
      });
  };
  
  {
    return (
      <SafeAreaView  style={styles.container}>
      <ScrollView>
          <View style = {{paddingHorizontal:40, paddingVertical:40}}>

              <View style={{ flex: 1, justifyContent:'center'}}>
                  <Text style={styles.guidelines}>Pwede nimo butangan ug hulagway kung unsa ang iyahang nawong.
                  </Text>
                  <TouchableOpacity
                      style={styles.imageButton}
                      onPress={pickImage}
                      title="Pick an image from camera roll">
                      <MaterialCommunityIcons
                        style={styles.addImage}
                        name="image"
                        color={"#707070"}
                        size={26}/>
                    </TouchableOpacity>
                  <View style={{alignItems:'center'}}>
                    {image && (
                    <Image
                        source={{ uri: image }}
                        style={{ width: 300, height: 200, marginTop: 20}}/>)}
                    </View>
                </View>

                <View style={styles.horiz}>
                     <TouchableOpacity
                        onPress={() => {
                          onSubmit();
                        }}
                         style={[
                          styles.buttonVocab,
                          {
                            backgroundColor: "#215A88",
                          },
                        ]}
                        >
                          <Text
                            style={{
                              color: "#ffffff",
                              alignSelf: "center",
                              fontSize: 18,
                            }}
                          >{loading ? `itigom...  ${parseInt(loading)}%` : "itigom"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          styles.buttonVocab,
                          {
                            backgroundColor: "#e7e7e7",
                          },
                        ]}
                        onPress={() => {
                          navigation.navigate('Chatbot');
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

export default connect(mapStateToProps, null)(AddImage);
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
});
