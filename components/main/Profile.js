import React, { useEffect, useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import {
  Avatar,
  Title,
  Caption,
  TextInput,
  Text,
  TouchableRipple,
  Banner,
} from "react-native-paper";

import { Picker } from "@react-native-picker/picker";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase/app";
require("firebase/auth");
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

var logo = require("../../assets/dapok.png");

function Profile({ currentUser, navigation }) {
  const [username, setUsername] = useState(currentUser.username);
  const [language, setLanguage] = useState(currentUser.language);
  const [isLoading, setLoading] = useState(false);

  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  const [visible, setVisible] = React.useState(true);

  const onLogout = () => {
    firebase.auth().signOut();
  };

  const onUpdate = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        username,
        language: language,
      })
      .then(function () {
        alert("Saved ");
        setLoading(null);
      });
  };
  if (currentUser.status == "1"){
  return (
    <SafeAreaView style={styles.container}>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Okay",
            color: "#215A88",
            onPress: () => setVisible(false),
          },
          // {
          //   label: 'Learn more',
          //   onPress: () => setVisible(false),
          // },
        ]}
      >
        Ang username lang ang pwede ma-ilis. Kung naa pud kay ma hatag nga mga impormasyon sa laing lengwahe, pwede mailis ang 'Spoken Language'.
      </Banner>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <Text>Name</Text>
            <TextInput
              style={styles.placeholder}
              placeholder={currentUser.name}
              editable={false}
              activeUnderlineColor="#215A88"
              // onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.placeholder}
              placeholder={currentUser.email}
              editable={false}
              activeUnderlineColor="#215A88"
              // onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.placeholder}>
            <Text>Username</Text>
            <TextInput
              activeUnderlineColor="#215A88"
              placeholder={currentUser.username}
              onChangeText={(username) => setUsername(username)}
            />
          </View>

          <View style={styles.placeholder}>
            <Text>Address</Text>
            <TextInput
              editable={false}
              placeholder={currentUser.address}
              activeUnderlineColor="#215A88"
              // onChangeText={(address) => this.setState({ address })}
            />
          </View>
          {/* <View style={styles.placeholder}>
            <Text>Spoken Language</Text>
            <TextInput
              editable={false}
              placeholder={currentUser.language.language}
              activeUnderlineColor="#215A88"
              // onChangeText={(language) => this.setState({ language })}
            />
          </View> */}
          <View style={styles.placeholder}>
          <Text>Spoken Language</Text>

            <Picker
            ref={pickerRef}
            selectedValue={language}
              style={[
                styles.pickerStyle,
                { backgroundColor: "#e7e7e7", borderBottomColor: "#d0d0d0" },
              ]}
              onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
            >
              <Picker.Item
                 label={currentUser.language}
                 //value={currentUser.language}
              />
              <Picker.Item label="Kagan" value="Kagan" />
              <Picker.Item label="Mansaka" value="Mansaka" />
              <Picker.Item label="Manobo" value="Manobo" />
            </Picker>
          </View>


          
          
        </View>
        {/* <View>
        <TouchableOpacity onPress={() => navigation.navigate("Validate")}>
            <View style={[styles.Bbuttonn, { backgroundColor: "#e7e7e7" }]}
            onPress={() => onUpdate()}>
            <Text style={[styles.text1]}>Report Generator</Text>
            </View>
          </TouchableOpacity>
          </View>  */}
        <View>
          <TouchableOpacity
            style={[styles.Bbutton, { backgroundColor: "#1F465B" }]}
            onPress={() => onUpdate()}
          >
            <Text style={[styles.text]}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => onLogout()}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}else{
  return(
    <SafeAreaView style={styles.container}>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Okay",
            color: "#215A88",
            onPress: () => setVisible(false),
          },
          // {
          //   label: 'Learn more',
          //   onPress: () => setVisible(false),
          // },
        ]}
      >
        You can only edit your username.
      </Banner>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <Text>Name</Text>
            <TextInput
              style={styles.placeholder}
              placeholder={currentUser.name}
              editable={false}
              activeUnderlineColor="#215A88"
              // onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.placeholder}
              placeholder={currentUser.email}
              editable={false}
              activeUnderlineColor="#215A88"
              // onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.placeholder}>
            <Text>Username</Text>
            <TextInput
              activeUnderlineColor="#215A88"
              placeholder={currentUser.username}
              onChangeText={(username) => setUsername(username)}
            />
          </View>

          <View style={styles.placeholder}>
            <Text>Address</Text>
            <TextInput
              editable={false}
              placeholder={currentUser.address}
              activeUnderlineColor="#215A88"
              // onChangeText={(address) => this.setState({ address })}
            />
          </View>
          {/* <View style={styles.placeholder}>
            <Text>Spoken Language</Text>
            <TextInput
              editable={false}
              placeholder={currentUser.language.language}
              activeUnderlineColor="#215A88"
              // onChangeText={(language) => this.setState({ language })}
            />
          </View> */}
          <View style={styles.placeholder}>
          <Text>Spoken Language</Text>

            <Picker
              style={[
                styles.pickerStyle,
                { backgroundColor: "#e7e7e7", borderBottomColor: "#d0d0d0" },
              ]}
              onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
            >
              <Picker.Item
                 label={currentUser.language}
                 //value={currentUser.language}
              />
              <Picker.Item label="Kagan" value="Kagan" />
              <Picker.Item label="Mansaka" value="Mansaka" />
              <Picker.Item label="Manobo" value="Manobo" />
            </Picker>
          </View>
          
        </View>
        {/* <View>
        <TouchableRipple onPress={() => navigation.navigate("Validate")}>
            <View style={[styles.Bbuttonn, { backgroundColor: "#e7e7e7" }]}
            onPress={() => onUpdate()}>
            <Text style={[styles.text1]}>Report Generator</Text>
            </View>
          </TouchableRipple>
          </View>  */}
        <View>
          <TouchableOpacity
            style={[styles.Bbutton, { backgroundColor: "#1F465B" }]}
            onPress={() => onUpdate()}
          >
            <Text style={[styles.text]}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => onLogout()}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // paddingHorizontal: 40
  },
  userInfoSelection: {
    // paddingHorizontal: 30,
    // marginBottom: 25,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollView: {
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  Bbutton: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 13,
    marginTop: 20,
    width: "90%",
  },
  Bbuttonn: {
    alignSelf: "center",
    borderRadius: 5,
    padding: 13,
    marginTop: 15,
    width: "100%",
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  text1: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  menuWrapper: {
    marginTop: 10,
  },

  menuItemText: {
    color: "#777777",
    fontWeight: "600",
    fontSize: 16,
  },
  placeholder: {
    borderRadius: 5,
    marginVertical: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
  },

  pickerStyle: {
    height: 60,
    width: "100%",
    color: "#344953",
    padding: 10,
    justifyContent: "center",
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
