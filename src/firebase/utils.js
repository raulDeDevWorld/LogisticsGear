import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import { getDatabase, ref, onValue, set, child, get, remove, update} from "firebase/database";

const app = initializeApp(firebaseConfig)

const auth = getAuth();
const db = getDatabase(app);

function onAuth(setUserProfile, setUserData) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user)
      getData(setUserData)
    } else {
      setUserProfile(user)
      getData(setUserData)

    }
  });
}

// ---------------------------Login, Sign Up and Sign In------------------------------------

function signUpWithEmail (email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
function signInWithEmail (email, password, setUserSuccess) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setUserSuccess(false)
  });
}

function handleSignOut () {
  handleSignOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

// -------------------------------Firebase Realtime Database------------------------------------

const dbRef = ref(getDatabase());

function getData(setUserData) {
  onValue(ref(db, '/'), (snapshot) => {
    if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
  });
}

function getSpecificData(query, setUserSpecificData) {

  get(child(dbRef, `users/${query}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setUserSpecificData(snapshot.val()) 
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeUserData (rute, object, setUserSuccess) {
  update(ref(db, rute), object )
  .then(()=> setUserSuccess !== null? setUserSuccess('save'): '')
  .catch(()=>setUserSuccess('repeat'))
}

async function removeData (rute, setUserData, setUserSuccess) {
  await remove(ref(db, rute)).then(()=>setUserSuccess('save')).catch(()=>setUserSuccess('repeat'));
  getData(setUserData)

}


export { onAuth, signUpWithEmail, signInWithEmail, handleSignOut, getData, getSpecificData, writeUserData, removeData }