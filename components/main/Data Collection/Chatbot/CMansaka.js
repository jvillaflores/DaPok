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

  export default function CMansaka() {
    return (
      <ScrollView style={styles.container}>
      <View>
          <Text>This is the collected data of Chatbot in Mansaka.</Text>
      </View>
      </ScrollView>
    )
  }
  const styles = StyleSheet.create({
  });