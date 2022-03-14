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

function AddWord({ currentUser, route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};


  const Accept = () => {
    setLoading(true);
    firebase
      .firestore()
      .doc(`dictionaryAll/${data?.id}`)
      .update({
        status: "1",
      })
      .then((result) => {
        navigation.goBack();
        setLoading(false);
      })
      .catch((err) => console.log(err, "-=error"));
  };
   {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.center}>
            <Text style={{fontSize:20}}>Itubag kini nga panguatana sa {currentUser.language}</Text>
            <Text style={styles.text}>{data?.bisaya} </Text>
          </View>
          <View style={styles.horiz}>
              <TextInput
                 
                  multiline={true}
                  activeUnderlineColor="#215A88"

                />
          </View>
          <View style={styles.horiz}>
              <TouchableOpacity style={[styles.buttonVocab,{
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

export default connect(mapStateToProps, null)(AddWord);
const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:50,
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
    fontSize:24
  }, 
});
