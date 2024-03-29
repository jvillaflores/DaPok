import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView
} from "react-native";

import { Dimensions } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function TKaganAnswer({ currentUser, route, navigation }) {
  const dimensions = Dimensions.get("window");
  const [datalist, setDatalist] = useState("");
  const { data } = route?.params ?? {};
  
  
useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("userAllTranslateAnswers")
        .doc(firebase.auth().currentUser.uid)
        .collection("userTranslateAnswers")
        .where("wordId","==", data?.id)
        .where("language", "==", "Kagan")
            .get()
            .then((snapshot) => {
            let words = snapshot.docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data };
          });
          setDatalist(words);
          console.log(data?.id)
        });
    })

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('TDone',{data:item})}>
          {/* ///////////////TDone.js////////////////// */}
          <View style={{ flexDirection: "row", flex: 1 }}>
          
          <View style={{ flex:1, flexDirection: "column"}}>
            
            <View style={[styles.itemBody,]}>
              <Text style={styles.itemsName}>{item?.bisaya}</Text>
            </View>
            <View style={[styles.itemBody,]}>
              <Text>{item?.newLanguage}</Text>
            </View> 
          </View>
          
          <View style={[styles.itemBody]}>
            <Text>{item?.language}</Text>
          </View>
        </View>
          </TouchableOpacity>
    );
  };
  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#E6E5E5" }} />;
  };

 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
}
const mapStateToProps = (store) => ({
  words: store.userState.words,
});
export default connect(mapStateToProps, null)(TKaganAnswer);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    listTab: {
      alignSelf: "center",
      marginBottom: 20,
      flexDirection: "row",
      paddingHorizontal: 2,
      backgroundColor: "#ebebeb",
      borderRadius: 10,
    },
  
    btnTab: {
      width: Dimensions.get("window").width / 4.5,
      flexDirection: "row",
      borderWidth: 0.5,
      borderColor: "#ebebeb",
      padding: 10,
      justifyContent: "center",
    },
    textTab: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#000000",
    },
    brnTabActive: {
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    textTabActive: {
      color: "#8E2835",
      fontWeight: "bold",
      fontSize: 13,
    },
    itemContainer: {
      flexDirection: "row",
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    itemLogo: {
      padding: 10,
    },
    itemImage: {
      width: 50,
      height: 50,
    },
  
    itemBody: {
      
      paddingHorizontal: 5,
      justifyContent: "center",
    },
  
    itemsName: {
      fontWeight:'bold',
      fontSize: 16,
    },
    itemStatus: {
      backgroundColor: "#69C080",
      paddingHorizontal: 17,
      height: 30,
      justifyContent: "center",
      right: 14,
      borderRadius: 5,
    },
    headLine: {
      flexDirection: "column",
      width: "100%",
      padding: 30,
      top: -20,
      height: 150,
      backgroundColor: "#8E2835",
      alignItems: "flex-start",
      justifyContent: "center",
      position: "relative",
    },
    textHead: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 0.25,
      position: "relative",
      alignSelf: "center",
      color: "white",
    },
    textSubHead: {
      flexDirection: "row",
      fontSize: 13,
      letterSpacing: 0.25,
      color: "white",
    },
    title: {
      top: 40,
    },
    statusFont: {
      fontWeight: "bold",
    },
    arrowRight: {
      backgroundColor: "#ebebeb",
      paddingHorizontal: 5,
      width: 30,
      height: 30,
      justifyContent: "center",
      right: 2,
      borderRadius: 5,
      margin: 10,
    },
    buttonContainer: {
      alignItems: "flex-end",
      alignSelf: "center",
    },
  });