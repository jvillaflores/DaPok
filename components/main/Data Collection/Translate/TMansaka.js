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

  export default function TMansaka() {
    return (
      <ScrollView style={styles.container}>
      <View>
          <Text>This is the collected data from the Translation of Mansaka</Text>
      </View>
      </ScrollView>
    )
  }
  const styles = StyleSheet.create({
  });