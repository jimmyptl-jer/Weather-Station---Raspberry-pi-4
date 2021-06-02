import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//Weather-Final
// var firebaseConfig = {
//     apiKey: "AIzaSyDK6LZ_0I-F1mp_Ownarz0YsG23pQyCD3s",
//     authDomain: "final-weather-98531.firebaseapp.com",
//     projectId: "final-weather-98531",
//     storageBucket: "final-weather-98531.appspot.com",
//     messagingSenderId: "578313785370",
//     appId: "1:578313785370:web:c59e5a037a1e095c8e01a3",
//     measurementId: "G-X0QVN9BN4H"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
// export const auth = firebase.auth()
// export const db = firebase.firestore()

// export default firebase

//Weather-2
// var firebaseConfig = {
//   apiKey: "AIzaSyCoSBhHgUcV4C3h8wzHgqEQ2qoz4ZDVl70",
//   authDomain: "weather-2-bc562.firebaseapp.com",
//   projectId: "weather-2-bc562",
//   storageBucket: "weather-2-bc562.appspot.com",
//   messagingSenderId: "745162914536",
//   appId: "1:745162914536:web:96abb996bc8eae468d675d"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth()
// export const db = firebase.firestore()
// export default firebase

//Weather-3
var firebaseConfig = {
  apiKey: "AIzaSyAdt6EU0JtZKvWdAUMXKWceAZREYzgRd9E",
  authDomain: "weather-3-b2144.firebaseapp.com",
  projectId: "weather-3-b2144",
  storageBucket: "weather-3-b2144.appspot.com",
  messagingSenderId: "132570498498",
  appId: "1:132570498498:web:664b84d77c4946c16f425b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase


