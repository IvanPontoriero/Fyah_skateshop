// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD9q1Ia_XKNbcChHpliCRcUCA2KwKbs8Ko",
  authDomain: "fyah-skateshop.firebaseapp.com",
  projectId: "fyah-skateshop",
  storageBucket: "fyah-skateshop.appspot.com",
  messagingSenderId: "947627633844",
  appId: "1:947627633844:web:d010fd895936a3ffb77be1",
  measurementId: "G-KYWFT3E8M5"
};

//Initialize Firebase
const app= firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app);
}