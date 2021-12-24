import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
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

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export const getFirestore = () => {
    return firebase.firestore(app);
}

export { auth, google };