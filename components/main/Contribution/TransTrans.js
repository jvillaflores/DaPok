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
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "1" })}
                  >
                    <Text style={styles.text}>A </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "2" })}
                    style={styles.button}
                >
                    <Text style={styles.text}>B</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "3" })}
                    style={styles.button}
                  >
                    <Text style={styles.text}>C</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "4" })}
                    style={styles.button}>
                    <Text style={styles.text}>D</Text>
                  </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "5" })}
                    style={styles.button}>
                    <Text style={styles.text}>E</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "6" })}
                    style={styles.button}>
                    <Text style={styles.text}>F</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "7" })}
                    style={styles.button}>
                    <Text style={styles.text}>G</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "8" })}
                    style={styles.button}>
                    <Text style={styles.text}>H</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "9" })}
                    style={styles.button}>
                    <Text style={styles.text}>I</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "10" })}
                    style={styles.button}>
                    <Text style={styles.text}>J</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "11" })}
                    style={styles.button}>
                    <Text style={styles.text}>K</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate("Set1Screen", { dataset: "12" })}
                    style={styles.button}>
                    <Text style={styles.text}>L</Text>
                  </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "13" })}
                  style={styles.button}>
                  <Text style={styles.text}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "14" })}
                  style={styles.button}>
                  <Text style={styles.text}>N</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "15" })}
                  style={styles.button}>
                  <Text style={styles.text}>O</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "16" })}
                  style={styles.button}>
                  <Text style={styles.text}>P</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "17" })}
                  style={styles.button}>
                  <Text style={styles.text}>Q</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "18" })}
                  style={styles.button}>
                  <Text style={styles.text}>R</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "19" })}
                  style={styles.button}>
                  <Text style={styles.text}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "20" })}
                  style={styles.button}>
                  <Text style={styles.text}>T</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "21" })}
                  style={styles.button}>
                  <Text style={styles.text}>R</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "22" })}
                  style={styles.button}>
                  <Text style={styles.text}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "23" })}
                  style={styles.button}>
                  <Text style={styles.text}>T</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "24" })}
                  style={styles.button}>
                  <Text style={styles.text}>U</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "25" })}
                  style={styles.button}>
                  <Text style={styles.text}>V</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "26" })}
                  style={styles.button}>
                  <Text style={styles.text}>W</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "27" })}
                  style={styles.button}>
                  <Text style={styles.text}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "28" })}
                  style={styles.button}>
                  <Text style={styles.text}>Y</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "29" })}
                  style={styles.button}>
                  <Text style={styles.text}>Z</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "30" })}
                  style={styles.button}>
                  <Text style={styles.text}>Aa</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "31" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ab</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Set1Screen", { dataset: "32" })}
                  style={styles.button}>
                  <Text style={styles.text}>Ac</Text>
                </TouchableOpacity>
            </View>
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
              <View style={{ flexDirection: "row"}}>
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
              <View style={{ flexDirection: "row"}}>
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
              <View style={{ flexDirection: "row"}}>
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
              <View style={{ flexDirection: "row"}}>
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
    color: "white",
  },
});
