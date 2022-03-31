import React, { useEffect, useState, useRef } from "react";

import firebase from "firebase/app";
require("firebase/auth");
import { connect } from "react-redux";


import { enableIndexedDbPersistence } from "firebase/app"; 
//setup cache
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/app";
//use from cache
import { collection, onSnapshot, where, query } from "firebase/app"; 
//disable network
import { disableNetwork } from "firebase/app"; 
//enable network
import { enableNetwork } from "firebase/app"; 


enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully

//setup cache
const firestoreDb = initializeFirestore(app, {
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  });

//use from cache
const q = query(collection(db, "cities"), where("state", "==", "CA"));
onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data());
        }

        const source = snapshot.metadata.fromCache ? "local cache" : "server";
        console.log("Data came from " + source);
    });
});

await disableNetwork(db);
console.log("Network disabled!");
// Do offline actions
// ...

await enableNetwork(db);
// Do online actions
// ...


