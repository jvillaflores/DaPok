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
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "51" })}
                    style={styles.button}>
                    <Text style={styles.text}>Av</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "52" })}
                    style={styles.button}>
                    <Text style={styles.text}>Aw</Text>
                  </TouchableOpacity>
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
              </View>
              <View style={{ flexDirection: "row" }}>
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
            </View>
            <View style={{ flexDirection: "row" }}>
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
            </View>
            <View style={{ flexDirection: "row" }}>
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
            </View>
            <View style={{ flexDirection: "row" }}>
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
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "69" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bn</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "70" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bo</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "71" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "72" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bq</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "73" })}
                  style={styles.button}>
                  <Text style={styles.text}>Br</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "74" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bs</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "75" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bt</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "76" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bu</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "77" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bv</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "78" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bw</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "79" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bx</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "80" })}
                  style={styles.button}>
                  <Text style={styles.text}>By</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "81" })}
                  style={styles.button}>
                  <Text style={styles.text}>Bz</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "82" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ca</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "83" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cb</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "84" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cc</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "85" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cd</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "86" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ce</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "87" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cf</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "88" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cg</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "89" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ch</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "90" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ci</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "91" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cj</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "92" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ck</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "93" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cl</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "94" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cm</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "95" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cn</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "96" })}
                  style={styles.button}>
                  <Text style={styles.text}>Co</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "97" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "98" })}
                  style={styles.button}>
                  <Text style={styles.text}>Cq</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "99" })}
                  style={styles.button1}>
                  <Text style={styles.text}>Cr</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "100" })}
                  style={styles.button1}>
                  <Text style={styles.text}>Cs</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "101" })}
                  style={styles.button1}>
                  <Text style={styles.text}>Ct</Text>
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
  button1: {
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
