import React, { Component } from 'react'
  import { 
    View,
    Text,  
    Button,   
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
  }
  from 'react-native'

  export default function Feed() {
    return (
      <ScrollView style={styles.container}>
      <View>
          <Text style={styles.chatword}>Chatbot</Text>
      </View>
      <TouchableOpacity
          style={[styles.button, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Register")}>
          <Text style={styles.text}>Kagan/Kalagan</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.button1, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Mansaka</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.button2, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Manobo</Text>
      </TouchableOpacity>
      <View>
          <Text style={styles.transword}>Translation</Text>
      </View>
      <TouchableOpacity
          style={[styles.button3, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Register")}>
          <Text style={styles.text}>Kagan/Kalagan</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.button4, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Mansaka</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.button5, { backgroundColor: "#CACACA" }]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Manobo</Text>
      </TouchableOpacity>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      alignContent: "center",
    },
    chatword:{
      fontSize: 15,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#181616",
      paddingVertical:52,
    },
    transword:{
      fontSize: 15,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#181616",
      paddingVertical:70,
    },
    button: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: -45,
      width: "100%",   
      },
    button1: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: 60,
      width: "100%",   
      },
    button2: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: -45,
      width: "100%",   
      },
    button3: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: -60,
      width: "100%",   
      },
    button4: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: 75,
      width: "100%",   
      },
    button5: {
      alignSelf: "center",
      borderRadius: 10,
      padding: 13,
      margin: -60,
      width: "100%",   
      },
  });