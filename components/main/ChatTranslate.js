import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

import { Dimensions } from "react-native";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");
import { TouchableOpacity } from "react-native-gesture-handler";

function ChatTranslate({ words, navigation, props }) {
  const [status, setStatus] = useState("Translate");
  const [datalist, setDatalist] = useState("");

  // useEffect(() => {
  //   setDatalist(dictionaryAll);
  // }, [dictionaryAll]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      firebase
        .firestore()
        .collection("words")
        .where("status", "==", "1")
        .get()
        .then((snapshot) => {
          let words = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          setDatalist(words);
        });
    });

    return unsubscribe;
  }, [navigation]);
  
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('WordScreen',{data:item})}
      >
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={styles.itemBody}>
            <Text style={{fontSize:15}}>{item?.bisaya}</Text>
          </View>
          <View style={styles.itemBody}>
            {/* <Text> {item?.status}</Text> */}
          </View>
        </View>

        
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#E6E5E5",padding: 1 }} />;
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
  currentUser: store.userState.currentUser,
  words: store.userState.words,
});

export default connect(mapStateToProps, null)(ChatTranslate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 5,
    marginBottom:15,
  },
  
  itemContainer: {
    paddingHorizontal: 40,
    paddingVertical:15,
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
});
