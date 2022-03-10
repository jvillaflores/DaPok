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

  export default function Chatbot() {
    return (
      <ScrollView style={styles.container}>
      <View>
          <Text style={styles.chatword}>Chatbot</Text>
      </View>
      </ScrollView>
    )
  }
  const styles = StyleSheet.create({
  });