import React from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet, 
    TouchableOpacity, 
    Image
} from 'react-native'

var logo = require("../../assets/da-pok.png");

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={{ width: 251, height: 194, left: 10, top: -55 }} />
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#215A88" }]}
            onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={[styles.button, { borderWidth: 3, borderColor: "#215A88" }]}
            onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.text, { color: "#215A88" }]}>Login</Text>
          </TouchableOpacity>
        </View>
  )
}


const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "80%",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.20,
    color: "white",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "relative",
    alignSelf: "center",
    top: -30,
  },
  header: {
    alignSelf: "center",
  },
  subHeader: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    bottom: -60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textSubHead: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    margin: 15,
    bottom: 10,
  },
});
