import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "firebase/app";
require("firebase/auth");
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

function TransTrans({ currentUser, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
           <View
              style={{
                alignItems:'center',
                paddingHorizontal: 20,
                paddingVertical: 20,
                flexDirection: "column",
              }}
           >
              <View style={{ flexDirection: "row"}}>
                  <TouchableOpacity
                    style={styles.button}
                  >
                    <Text style={styles.text}>Ad</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.text}>Ae</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.text}>Af</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Ag</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Ah</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Ai</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Aj</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Ak</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Al</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.text}>Am</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>An</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Ao</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Ap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Aq</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Ar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>As</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>At</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Au</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Av</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Aw</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Ax</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Ay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Az</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Ba</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bb</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bd</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Be</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bf</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Bi</Text>
                </TouchableOpacity>
            </View>

          </View>
          </ScrollView>
    </SafeAreaView>
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  words: store.userState.words,
});

export default connect(mapStateToProps, null)(TransTrans);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 5,
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
  button: {
    backgroundColor: "#AEAEAE",
    borderRadius: 5,
    width: 70,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
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
  itemContainer: {
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  itemBody: {
    color: "#777777",
    marginLeft: 0,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    paddingVertical: 3,
    marginLeft: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    //lineHeight: 21,
    //letterSpacing: 0.55,
    color: "white",
    //margin: 18,
  },
});
