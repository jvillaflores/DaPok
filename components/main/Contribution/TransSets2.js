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
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "33" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ad</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "34" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ae</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "35" })}
                    style={styles.button}>
                    <Text style={styles.text}>Af</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "36" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ag</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "37" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ah</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "38" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ai</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "39" })}
                    style={styles.button}>
                    <Text style={styles.text}>Aj</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "40" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ak</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "41" })}
                    style={styles.button}>
                    <Text style={styles.text}>Al</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "42" })}
                    style={styles.button}>
                    <Text style={styles.text}>Am</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "43" })}
                    style={styles.button}>
                    <Text style={styles.text}>An</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "44" })}
                    style={styles.button}>
                    <Text style={styles.text}>Ao</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "45" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ap</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "46" })}
                  style={styles.button}>
                  <Text style={styles.text}>Aq</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "47" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "48" })}
                  style={styles.button}>
                  <Text style={styles.text}>As</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "49" })}
                  style={styles.button}>
                  <Text style={styles.text}>At</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "50" })}
                  style={styles.button}>
                  <Text style={styles.text}>Au</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "51" })}
                  style={styles.button}>
                  <Text style={styles.text}>Av</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "52" })}
                  style={styles.button}>
                  <Text style={styles.text}>Aw</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "53" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ax</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "54" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ay</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "55" })}
                  style={styles.button}>
                  <Text style={styles.text}>Az</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "56" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ba</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "57" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bb</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "58" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bc</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "59" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bd</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "60" })}
                  style={styles.button}>
                  <Text style={styles.text}>Be</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "61" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bf</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "62" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bg</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "63" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bh</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "64" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bi</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "65" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bj</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "66" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bk</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "67" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bl</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "68" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bm</Text>
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
