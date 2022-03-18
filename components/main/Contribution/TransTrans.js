import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity
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

const onLogout = () => {
  firebase.auth().signOut();
};

function TransTrans({ currentUser, navigation }) {
  const [datalist, setDatalist] = useState("");

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
            <Text style={styles.itemsName}> {item?.bisaya}</Text>
          </View>
          <View style={styles.itemBody}>
            <Text> {item?.status}</Text>
          </View>
        </View>

        
      </TouchableOpacity>
    );
  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#E6E5E5" }} />;
  };


  if (currentUser.setStatus == "2") {
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
  } else if (currentUser.setStatus == "1") {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.userInfoSelection}>
            {currentUser.userImage != " " ? (
              <Avatar.Image source={{ uri: currentUser.userImage }} size={80} />
            ) : null}
            {currentUser.userImage == " " ? (
              <Avatar.Image
                source={require("../../../assets/chat.png")}
                size={80}
              />
            ) : null}

            <View>
              <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
                {currentUser.name}
              </Title>
            </View>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => navigation.navigate("MyContribution")}
          >
            <View style={styles.menuItem}>
              <Icon name="folder-outline" color="#777777" size={25} />
              <Text style={styles.menuItemText}>My Contributions</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate("Validate")}>
            <View style={styles.menuItem}>
              <Icon
                name="checkbox-marked-circle-outline"
                color="#777777"
                size={25}
              />
              <Text style={styles.menuItemText}>Check Submissions</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => onLogout()}>
            <View style={styles.menuItem}>
              <Icon name="logout" color="#777777" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  } return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.userInfoSelection}>
          {currentUser.userImage != " " ? (
            <Avatar.Image source={{ uri: currentUser.userImage }} size={80} />
          ) : null}
          {currentUser.userImage == " " ? (
            <Avatar.Image
              source={require("../../../assets/chat.png")}
              size={80}
            />
          ) : null}

          <View>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              {currentUser.name}
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => navigation.navigate("MyContribution")}
        >
          <View style={styles.menuItem}>
            <Icon name="folder-outline" color="#777777" size={25} />
            <Text style={styles.menuItemText}>My Contributions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("Validate")}>
          <View style={styles.menuItem}>
            <Icon
              name="checkbox-marked-circle-outline"
              color="#777777"
              size={25}
            />
            <Text style={styles.menuItemText}>Check Submissions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => onLogout()}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#777777" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
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
    top: 30,
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
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  menuWrapper: {
    marginTop: 10,
  },

  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
