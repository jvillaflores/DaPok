import React from 'react'
import {
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { connect } from 'react-redux'

function AddTrans() {
  return (
    <SafeAreaView>
        <ScrollView>

        </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
  });

export default connect(mapStateToProps, null) (AddTrans)

const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      // /justifyContent: "center",
      top: 1,
      //left: 40,
    },
});