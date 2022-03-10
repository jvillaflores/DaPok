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

  import {List} from 'react-native-paper';

  const MyComponent = ({navigation}) => (
    <ScrollView style={styles.container}>
    <List.Section>
        <List.Subheader style={styles.text}>Chatbot</List.Subheader>
      <View >
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CKagan")}
          style = {{margin: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CMansaka")}
          style = {{margin: -15, top: 5}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("CManobo")}
          style = {{margin: -15, top: 10}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      </View>
      <List.Subheader style={styles.text1}>Translate</List.Subheader>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TKagan")}
          style = {{margin: -15, top: -15}} title="Kagan/Kalagan" left={() => <List.Icon color="#215A88" icon="folder" />} />
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TManobo")}
          style = {{margin: -15, top: -10}} title="Mansaka" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item 
          onPress={() => navigation.navigate("TMansaka")}
          style = {{margin: -15, top: -5}} title="Manobo" left={() => <List.Icon color="#215A88" icon="folder"/>}/>
      </TouchableOpacity>
    </List.Section>
    </ScrollView>
  );

  export default MyComponent;

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 25,
      },
      text:{
        fontSize: 15,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#1F465B",
        paddingVertical:30,
        margin: -10,
      },
      text1:{
        fontSize: 15,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#1F465B",
        paddingVertical:50,
        margin: -10,
      },
    });