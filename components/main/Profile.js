import React, { useEffect, useState } from "react";
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

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase/app";
require("firebase/auth");
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

var logo = require("../../assets/dapok.png");




function Profile({ currentUser, navigation }) {
  const [username, setUsername] = useState(currentUser.username);
  const [visible, setVisible] = React.useState(true);

  const onLogout = () => {
    firebase.auth().signOut();
  };
  
  const onUpdate = () =>{
    firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
          username,
        })
        .then(function () {
          alert("Saved ");
          // navigation.popToTop();
          setLoading(null);
          alert(
            "Profile photo might not yet be available after, please restart application if it occurs. Thank you!"
          );
        });
  }
  return (
    
    <SafeAreaView style={styles.container}>
        <Banner
            visible={visible}
            actions={[
        {
          label: 'Okay',
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
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        <View style={{flex: 1, justifyContent: "center" }}>
                      <View>
                            <Text>Name</Text>
                            <TextInput style={styles.placeholder}
                              placeholder={currentUser.name}
                              editable={false}
                              activeUnderlineColor="#215A88"
                              // onChangeText={(name) => this.setState({ name })}
                            />
                      </View>
                      <View>
                          <Text>Email</Text>
                          <TextInput style={styles.placeholder}
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
                     <View style={styles.placeholder}>
                        <Text>Spoken Language</Text>
                        <TextInput
                          editable={false}
                          placeholder={currentUser.language}
                          activeUnderlineColor="#215A88"
                          // onChangeText={(language) => this.setState({ language })}
                        />
                    </View>       

                </View>  

                <View>  
                    <TouchableOpacity
                        style={[styles.Bbutton, { backgroundColor: "#1F465B" }]}
                        onPress={() => onUpdate()}>
                        <Text style={[styles.text]}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.button}onPress={() => onLogout()}>
                      <Text style={styles.menuItemText}>Logout</Text>
                  </TouchableOpacity>
                </View>    
            

        </ScrollView>
    </SafeAreaView>
  )
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
    paddingHorizontal:40,
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
  text: {
      alignSelf: "center",
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 21,
      letterSpacing: 0.25,
      color: "white",
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
    marginVertical: 5
  },
  button: {
    alignItems: "center",
    justifyContent:'center',
    borderRadius: 20,
    marginTop: 20,
    width: "100%",  
    flexDirection: "row", 
  },
});
