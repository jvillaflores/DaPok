import { 
  USER_STATE_CHANGE,
  USER_ALL_STATE_CHANGE,
  USER_WORDS_STATE_CHANGE,
 } from '../constants/index'
 
import firebase from 'firebase'
require("firebase/firestore");


//will call to trigger database action

//call the firestore
//get the disptach
//when snapshot exist
//
export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                console.log(snapshot.data())
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }

            else{
                console.log('does not exist')
            }
        })
    })
}

//put on constanst index.js

export function fetchAllUser() {
    return (dispatch) => {
      firebase
        .firestore()
        .collection("users")
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            dispatch({ type: USER_ALL_STATE_CHANGE, usersAll: snapshot.data() });
          } else {
          }
        });
    };
  }

export function fetchWords() {
    return (dispatch) => {
      firebase
        .firestore()
        .collection("words")
        .get()
        .then((snapshot) => {
          let words = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          dispatch({ type: USER_WORDS_STATE_CHANGE, words });
        });
    };
}