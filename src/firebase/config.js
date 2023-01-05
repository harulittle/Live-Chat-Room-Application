import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDuP1HwgzSDH3vq-P1k1DgaBKOP4Cv8CgQ",
    authDomain: "vue-blog-system-ba8f5.firebaseapp.com",
    projectId: "vue-blog-system-ba8f5",
    storageBucket: "vue-blog-system-ba8f5.appspot.com",
    messagingSenderId: "764871712042",
    appId: "1:764871712042:web:cea67845104ccc15bcd253"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};