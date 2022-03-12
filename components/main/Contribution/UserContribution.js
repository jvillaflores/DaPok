import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function Validation({ words, route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { data } = route?.params ?? {};

     return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Word </Text>

            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.kagan}
              multiline={true}
              editable={false}
            />
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>In Filipino </Text>

            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.filipino}
              multiline={true}
              editable={false}
            />
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Pronunciation </Text>

            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.pronunciation}
              multiline={true}
              editable={false}
            />
          </View>

          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Kinagan Sentence Example </Text>

            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.sentence}
              multiline={true}
              editable={false}
            />
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>English Meaning </Text>
            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.filipinoSentence}
              multiline={true}
              editable={false}
            />
          </View>

          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Filipino Meaning </Text>
            <TextInput
              style={[styles.description_input, { color: "black" }]}
              value={data?.meaning}
              multiline={true}
              editable={false}
            />
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Audio </Text>
            <Text style={styles.guidelines}></Text>
            <TouchableOpacity
              style={styles.audioButton}
              onPress={() => downloadAudio()}
            >
              <View>
                <MaterialCommunityIcons
                  style={styles.addAudio}
                  name="volume-high"
                  color={"#707070"}
                  size={26}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Decline note </Text>
            <TextInput
              style={[styles.description_input, { color: "black" }]}
              value={data?.note}
              multiline={true}
              editable={false}
            />
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.title_text}>Validated By </Text>
            <TextInput
              style={[styles.input, { color: "black" }]}
              value={data?.validatedBy}
              multiline={true}
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    
  
    );
  }


const mapStateToProps = (store) => ({
  words: store.userState.words,
});

export default connect(mapStateToProps, null)(Validation);
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    // /justifyContent: "center",
    top: 1,
    //left: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 100,
    marginTop: 30,
  },
  subtitle: {
    alignSelf: "center",
    fontSize: 18,

    letterSpacing: 0.25,
    color: "white",
  },
  buttonAccept: {
    // alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    // elevation: 1,
    width: "40%",
    backgroundColor: "#73B504",
    //top: 130,
    // marginTop: 20,
    // marginBottom: 80,
  },
  button: {
    // alignSelf: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    // elevation: 1,
    width: "40%",
    backgroundColor: "#8E2835",
    //top: 130,
    // marginBottom: 100,
  },
  audioButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    borderWidth: 1,
    borderRadius: 10,
    height: 70,
    borderColor: "#707070",
    paddingTop: 20,
    marginTop: 10,
  },
  guidelines: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#707070",
  },
  addAudio: {
    flex: 1,
  },

  bottom: {
    marginBottom: 20,
  },

  center: {
    justifyContent: "center",
    alignContent: "center",
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
  },
  text_input: {
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 10,
  },
  input: {
    letterSpacing: 0.25,
    height: 50,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#707070",
  },
  tags_input: {
    letterSpacing: 0.25,
    height: 80,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#707070",
  },
  description_input: {
    letterSpacing: 0.25,
    height: 100,
    width: "95%",
    paddingLeft: 12,
    paddingTop: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#707070",
  },
});
